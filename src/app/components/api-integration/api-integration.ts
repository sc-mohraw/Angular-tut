import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { AddUserModal } from '../reusablecomponents/add-user-modal/add-user-modal';

@Component({
  selector: 'app-api-integration',
  imports: [AddUserModal],
  templateUrl: './api-integration.html',
  styleUrl: './api-integration.css',
})
export class ApiIntegration implements OnInit {
  http = inject(HttpClient);
  users = signal<any>([])

  @ViewChild('addUserModal')
  addUserModal!: AddUserModal;

  open(userData: any) {
    this.addUserModal.open(userData);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
      this.users.set(res)
    })
  }

  onDeleteUser(id: number) {
    this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + id).subscribe({
      next: (res: any) => {
        this.getUsers();
        alert("User deleted successfully!")
      },
      error: (err) => {
        alert("Error : " + err.error || 'Something went wrong')
      }
    })
  }
}
