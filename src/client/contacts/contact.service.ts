import {Injectable} from "@angular/core";
import {Inject} from "@angular/core";
import {Contact} from "./contact";
import {Http, HTTP_PROVIDERS} from "@angular/http";

@Injectable()
export class ContactService {
    contacts: Contact[] = [];
    http: Http;
    constructor( @Inject(Http) http: Http) {
        this.http = http;
    }

    // getContacts() { return Promise.resolve(CONTACTS); }

    getContacts(): any {
        return this.http.get("/users/getContacts");
        // .map((res) => res.json());

        // it is important to have this subscribe call, since the 
        // request is only made if there is a subscriber 
        // .subscribe(res => this.contacts = res.json());
        // return Promise.resolve(this.contacts);            
    }

    getContact(id: number): any {
        return Promise.resolve(this.contacts)
            .then(contacts => contacts.filter(c => c.id === id)[0]);
    }

}
