import { Component } from '@angular/core';
import { WarningComponent } from "../reusablecomponents/warning-component/warning-component";

@Component({
  selector: 'app-user',
  imports: [WarningComponent],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name = "Mohit"
  age = "24"
  receiveMessage(data: string) {
    console.log(data)
  }
}
