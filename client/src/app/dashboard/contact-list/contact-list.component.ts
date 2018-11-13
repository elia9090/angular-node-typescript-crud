import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ContactListService } from './contact-list.service';
import { IContact } from './contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnChanges {
  contacts: IContact[] = [];
  filteredContacts: IContact[] = [];
  errorMessage = '';
  @Input() searchTerm = '';

  constructor(private contactListService: ContactListService) {
  }

  ngOnInit() {
    console.log('Getting the list of contacts');
    this.contactListService.getContacts().subscribe(
      contacts => {
        this.contacts = contacts;
        this.filteredContacts = this.contacts;
      },
      error => this.errorMessage = <any>error );

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchTerm']) {
      this.filteredContacts = this.searchTerm ? this.contacts.filter((contact: IContact) =>
          contact.firstName.toLocaleLowerCase().indexOf(this.searchTerm.toLocaleLowerCase()) !== -1
          ) : this.contacts;
    }
  }

}
