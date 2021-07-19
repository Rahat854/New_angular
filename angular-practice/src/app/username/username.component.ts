import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  userNameCreation = 'No username is created'
  userName : any = ''
  constructor() { }

  ngOnInit(): void {
  }
  onCreateUsers() {
    this.userNameCreation = 'username is created by name '+ this.userName
  }
  onUpdateUserName(event: any) {
    this.userName = <HTMLInputElement>event.target.value
  }
}
