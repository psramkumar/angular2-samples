import {Component} from 'angular2/core';

@Component({
    selector: 'dashboard',
	templateUrl: 'client/dashboard/dashboard.html',
    styleUrls : ['client/dashboard/dashboard.css']
})
export class DashboardComponent {
	public name = 'narukku';
	public message = '';

	sayHello() {
		this.message = 'Hello ' + this.name + '!';
	}
}
