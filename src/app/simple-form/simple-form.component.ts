import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() message;
  onClick(value){
    console.log(value);
  }
  constructor() {
    setInterval(() => this.message = Math.random().toString(), 1000);
   }
  ngOnInit(){
  }
}
