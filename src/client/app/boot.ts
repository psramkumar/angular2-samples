import {bootstrap} from "@angular/platform-browser-dynamic";
import {Http, HTTP_PROVIDERS} from "@angular/http";

import {AppComponent} from "./app.component";
import {APP_ROUTES_PROVIDER} from './app.routes';

import {ContactService} from "../contacts/contact.service";
import {TaskService} from "../task/taskService";
import {BookmarkService} from "../workshop/firstapp/bookmark.service";
import {enableProdMode} from '@angular/core';

enableProdMode();

bootstrap(AppComponent, [
    APP_ROUTES_PROVIDER,
    HTTP_PROVIDERS,
    ContactService,
    BookmarkService,
    TaskService
]).catch(err => console.error(err));