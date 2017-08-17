import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  // message = 'You´ve got mail'
  messages = [
    {id: 0, text: 'Mensaje 1'},
    {id: 1, text: 'Mensaje 2'},
    {id: 2, text: 'Mensaje 3'}
  ];

  update(id, text) {
    this.messages = this.messages.map(m => m.id === id ? {id, text} : m);
  }
  constructor() { }

}
