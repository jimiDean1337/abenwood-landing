import { Component, OnInit } from '@angular/core';
// import { NgModel } from '@angular/forms';
import { ContactService, NewContact } from './contact.service';
import { Observable, BehaviorSubject, fromEvent, of, throwError } from 'rxjs';
import { map, reduce, tap } from 'rxjs/operators';

@Component({
  selector: 'app-abenwood-contact',
  templateUrl: './abenwood-contact.component.html',
  styleUrls: ['./abenwood-contact.component.scss']
})

export class AbenwoodContactComponent implements OnInit {
  contact: NewContact = {};
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    const phoneRegex = `/^(?:\+|00|011)[0-9 ().-]+$/`;

  }

}
