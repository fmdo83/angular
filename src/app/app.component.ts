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
  widgetRef;
  @ViewChild('container', {read: ViewContainerRef}) container;
  @ViewChild('template') template;

  onUpdate(id, text) {
    this.mail.update(id, text);
  };

  // constructor(private mail:MailService){}
  constructor(@Inject('mail') private mail, private resolver: ComponentFactoryResolver) {
  };

  ngAfterContentInit() {
    const widgetFactory = this.resolver.resolveComponentFactory(SimpleFormComponent);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.widgetRef = this.container.createComponent(widgetFactory,2);
    this.widgetRef.instance.message = "I'm third!";
  };

  onClick() {
    /*
    const widgetFactory = this.resolver
        .resolveComponentFactory(SimpleFormComponent);

    const widgetRef = this.container
        .createComponent(widgetFactory, 3);

    widgetRef.instance.message = "I'm fourth";
    */
    // const randomIndex = Math.floor(Math.random() * this.container.length);
    // this.container.move(this.widgetRef.hostView, randomIndex);
    // this.container.detach(2);
    this.container.createEmbeddedView(this.template, {description : 'sweet'});

  };
}

