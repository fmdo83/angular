import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styles: [`
      :host{
        display:flex;
        flex-direction: column;
      }

      .mousedown{
        border: 2px solid green;
      }

      input:focus{
        font-weight: bold;
        outline: none;
      }

      button{
        border: none;
      }
  `]
})
export class SimpleFormComponent implements OnInit {
  isMousedown;
  @Input() message = "default value!";
  @Output() update2 = new EventEmitter();
  @ViewChild('myInput') input;

  constructor(private renderer: Renderer) {
    // setInterval(() => this.message = Math.random().toString(), 1000);
   }
   ngAfterViewInit(){
    //this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
   }
   ngOnInit() {}
}