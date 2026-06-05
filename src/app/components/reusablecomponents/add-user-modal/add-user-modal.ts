import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user-modal',
  imports: [NgStyle, FormsModule],
  templateUrl: './add-user-modal.html',
  styleUrl: './add-user-modal.css',
})
export class AddUserModal {
  isOpen = false;
  http = inject(HttpClient);
  @Output() getUsers = new EventEmitter<void>();

  userObj: any = {
    userId: 0,
    emailId: "",
    fullName: "",
    mobileNo: "",
    password: ""
  }

  open(userData: any) {
    if (userData && userData.userId) {
      this.userObj = { ...userData };
    } else {
      this.userObj = {
        userId: 0,
        emailId: "",
        fullName: "",
        mobileNo: "",
        password: ""
      };
    }
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.userObj = {
      userId: 0,
      emailId: "",
      fullName: "",
      mobileNo: "",
      password: ""
    }
  }

  onAddUser() {
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({
      next: (res: any) => {
        this.getUsers.emit();
        this.close();
        alert("User added successfully!")
      },
      error: (err) => {
        alert("Error : " + err.error || 'Something went wrong')
        this.close();
      }
    })
  }

  onEditUser() {
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userObj.userId, this.userObj).subscribe({
      next: (res: any) => {
        this.getUsers.emit();
        this.close();
        alert("User updated successfully!")
      },
      error: (err) => {
        alert("Error : " + err.error || 'Something went wrong')
        this.close();
      }
    })
  }
}
