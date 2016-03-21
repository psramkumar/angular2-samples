import {Component} from 'angular2/core';
import {RouteConfig , ROUTER_DIRECTIVES} from 'angular2/router';

import {DashboardComponent} from '../dashboard/dashboard.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {TaskComponent} from '../task/task.component';
import {UdemyComponent} from '../udemy/udemy.component';

import {HelloWorldComponent} from '../examples/helloworld/helloworld.component';
import {TodoComponent} from '../examples/todo/todo.component';
import {TabDemoComponent} from '../examples/tabs/demo.component';


@Component({
  selector: 'app',
  templateUrl:'client/app/app.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  //{ path: '/', redirectTo: ['Dashboard'] },
  { path: '/dashboard', as: 'Dashboard', component: DashboardComponent, useAsDefault: false },
  
  { path: '/examples/helloworld', as: 'Helloworld', component: HelloWorldComponent},
  { path: '/examples/todo', as: 'Todo', component: TodoComponent},
  { path: '/examples/tabs', as: 'Tabs', component: TabDemoComponent},
  
  { path: '/tasks', as: 'Tasks', component: TaskComponent},
  { path: '/contacts', as: 'Contacts', component: ContactsComponent },
  { path: '/udemy', as: 'Udemy', component: UdemyComponent ,useAsDefault: true }
])
export class AppComponent { }
