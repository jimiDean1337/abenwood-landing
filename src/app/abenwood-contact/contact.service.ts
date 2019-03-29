import { Injectable } from '@angular/core';
import { AngularFirestore, Reference, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireMessaging } from '@angular/fire/messaging';
export interface NewContact {
  name?: string;
  email?: string;
  phone?: string;
  message?: {
    subject?: string,
    text?: string
  };
}
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  newContact: NewContact;
  constructor(private afs: AngularFirestore, public messaging: AngularFireMessaging) { }
}
