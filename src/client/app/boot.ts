/// <reference path="../../../typings/browser.d.ts" />

import {bootstrap} from "@angular/platform-browser-dynamic";
import {Http, HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_PROVIDERS} from "@angular/router";

import {AppComponent} from "./app.component";
import {APP_ROUTES_PROVIDER} from './app.routes';

import {ContactService} from "../contacts/contact.service";
import {TaskService} from "../task/taskService"

bootstrap(AppComponent, [
//    ROUTER_PROVIDERS,
    APP_ROUTES_PROVIDER,
    HTTP_PROVIDERS,
    ContactService,
    TaskService
]).catch(err => console.error(err));