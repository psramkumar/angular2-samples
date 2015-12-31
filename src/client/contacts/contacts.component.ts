import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ContactService} from './contact.service';
import {Contact} from './contact';

@Component({
  selector: 'contacts',
  templateUrl: 'client/contacts/contacts.html',
  styleUrls: ['client/contacts/contacts.css']
})

export class ContactsComponent {
  private _contacts: Contact[];
  public currentContact: Contact;
  
  constructor(private _contactService: ContactService) {}

  get contacts() {
    return this._contacts || this.getContacts()
  }

  onSelect(contact: Contact) { this.currentContact = contact; }

  /////////////////

  private getContacts() {
    this._contacts = [];

    this._contactService.getContacts()
      //.then(contacts => this._contacts = contacts);
    .subscribe(contacts => this._contacts = contacts.json());
    return this._contacts;
  }
}
