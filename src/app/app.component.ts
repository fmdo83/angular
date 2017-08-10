import { Component, Inject } from '@angular/core';
// import { MailService } from './mail.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Prueba!';
  // constructor(private mail:MailService){}
  constructor(@Inject('mail') private mail
            // @Inject('api') private api
             ) {
          }
}
