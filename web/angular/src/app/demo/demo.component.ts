import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../core';

@Component({
    selector: 'lightswitch-comp',
    template: `
      <button (click)="clicked()">Click me!</button>
      <span>{{message}}</span>`
  })
  export class DemoComponent {
    isOn = false;
    clicked() { this.isOn = !this.isOn; }
    get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}