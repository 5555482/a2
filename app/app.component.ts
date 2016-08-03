import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
    
})
export class AppComponent {
    title = 'Customer App';
    name = 'Nata';
    wardColor = 'blue';
    customers = [ 
        {id: 1, name: 'Ward'},
        {id: 2, name: 'Susan'},
        {id: 3, name: 'Kevin'},
        {id: 4, name: 'Borsh'},
        {id: 5, name: 'Lily'},
    ];
    changeSuitColor() {
        this.wardsColor = this.wardColor === 'blue' ? 'red' : 'blue';
    }
}
