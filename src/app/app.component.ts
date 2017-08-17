import { Component, Inject } from '@angular/core';
// import { MailService } from './mail.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Prueba!';

  onUpdate(id, text) {
    this.mail.update(id, text);
  }

  // constructor(private mail:MailService){}
  constructor(@Inject('mail') private mail
            // @Inject('api') private api
             ){
             };
}
