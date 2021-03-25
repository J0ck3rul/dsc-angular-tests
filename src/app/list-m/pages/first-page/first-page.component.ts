import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services';
export interface IUser {
  name: string;
  username: string;
  email: string;
}

@Component({
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  user: IUser = { name: "", username: "", email: "" };


  usersList1: Array<IUser> = [];
  usersList2: Array<IUser> = [];

  list1Title = "List 1";
  list2Title = "List 2";

  constructor(private userService: UserService) {
    this.getUserList2();
  }

  ngOnInit(): void {
  }

  getUserList2(): void {
    this.userService.getUsers().subscribe((response: any) => {
      response.forEach((element: any) => {

        let newUser: IUser = { name: element.name, username: element.username, email: element.email };
        this.usersList2.push(Object.assign({}, newUser));
      })
    })
  }

  addToList(userForm: IUser): void {
    this.usersList1.push(Object.assign({}, userForm));
    this.onClear();
  }

  onClear() {
    this.user.name = "";
    this.user.username = "";
    this.user.email = "";
  }

  scrollTo(pageSection: string): void {
    let element = document.getElementById(pageSection);
    console.log(element);
    if (element)
      element.scrollIntoView({ behavior: "smooth" });
  }

}


