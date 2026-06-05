import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-warning-component',
  imports: [],
  templateUrl: './warning-component.html',
  styleUrl: './warning-component.css',
})
export class WarningComponent {
  @Input() title: string = ''
  @Output() message: EventEmitter<string> = new EventEmitter<string>()

  sendMessage() {
    this.message.emit('Hello from warning component');
  }
}
