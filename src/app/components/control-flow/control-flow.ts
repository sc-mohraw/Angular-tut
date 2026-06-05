import { Component, signal } from '@angular/core';
import { WarningComponent } from '../reusablecomponents/warning-component/warning-component';

@Component({
  selector: 'app-control-flow',
  imports: [WarningComponent],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFLow {
  isShowContent = signal(true);
  users: any[] = [
    {
      id: 1,
      name: 'Mohit',
      age: 25
    },
    {
      id: 2,
      name: 'Rahul',
      age: 28
    },
    {
      id: 3,
      name: 'Amit',
      age: 22
    }
  ];

  showContent() {
    this.isShowContent.set(true);
  }
  hideContent() {
    this.isShowContent.set(false);
  }
}
