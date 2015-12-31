import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent} from './app.component';

import {ContactService} from '../contacts/contact.service';
import {TaskService} from '../task/taskService'

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
	ContactService,
    TaskService
]);