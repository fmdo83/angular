import { Component, Inject, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SimpleFormComponent } from './simple-form/simple-form.component';
// import { MailService } from './mail.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Prueba!';

  @ViewChild('container', {read: ViewContainerRef}) container;

  onUpdate(id, text) {
    this.mail.update(id, text);
  }

  // constructor(private mail:MailService){}
  constructor(@Inject('mail') private mail, private resolver: ComponentFactoryResolver)
  {
  };

  ngAfterContentInit(){
    const widgetFactory = this.resolver.resolveComponentFactory(SimpleFormComponent);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    const widgetRef = this.container.createComponent(widgetFactory);
    widgetRef.instance.message = "I'm last!";
  }
}

