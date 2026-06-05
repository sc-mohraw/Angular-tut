import { Component } from '@angular/core';
import { WarningComponent } from "../reusablecomponents/warning-component/warning-component";
import { DatePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [WarningComponent, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, DatePipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name = "Mohit"
  age = 24
  marks = [90, 87, 85, 92, 78, 84, 64, 54, 87]
  currentDate: Date = new Date();

  receiveMessage(data: string) {
    console.log(data)
  }
}
