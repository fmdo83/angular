import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  //message = 'You´ve got mail'
  messages = ['Mensaje 1', 
             'Mensaje 2',
             'Mensaje 3']
  constructor() { }

}
