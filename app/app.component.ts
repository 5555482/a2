import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './customer.service';

@Component({
    moduleId: __moduleName,
    selector: 'my-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent],
    providers: [CustomerService]
})
export class CustomerComponent implements OnInit{
    customers: Observable<any[]>;

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        this.customers = this._customerService.getCustomers()
            .catch((err) => {
                console.log(err);
                return Observable.of(true);
            });
    }
}

