import { Injectable } from '@angular/core';
import { Http } from '@angular/core';
const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService {
	constructor(private _http: Http) { }

	getCustomers() {
	this._http.get(URL_CUSTOMER);
	}
}