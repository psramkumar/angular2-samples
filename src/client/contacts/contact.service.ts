import {Injectable} from 'angular2/core';
import {Inject} from 'angular2/core';
import {Contact} from './contact';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class ContactService {
    contacts :Contact[] = [];
    http:Http;
    constructor(@Inject(Http) http:Http) {
        this.http = http;
    }

    //getContacts() { return Promise.resolve(CONTACTS); }
	
    getContacts(): any {
        return this.http.get('/getContacts')
            ;//.map((res) => res.json());

            //it is important to have this subscribe call, since the 
            //request is only made if there is a subscriber 
            //.subscribe(res => this.contacts = res.json());
        //return Promise.resolve(this.contacts);            
    }   
    
    getContact(id: number):any {
		return Promise.resolve(this.contacts)
			.then(contacts => contacts.filter(c => c.id === id)[0]);
	}
        
}
