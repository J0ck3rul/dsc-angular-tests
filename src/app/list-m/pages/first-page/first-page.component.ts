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
  editedUser = this.user;
  isEditing = false;
  editedItemIndex = 0;

  usersList1: Array<IUser> = [{ 'name': 'test1', 'username': 'test1', 'email': 'test@test.com' }];
  usersList2: Array<IUser> = [];

  list1Title = "List 1 (editable)";
  list2Title = "List 2 (not editable)";

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
    this.isEditing ? this.usersList1.splice(this.editedItemIndex, 0, userForm) :
      this.usersList1.push(Object.assign({}, userForm));
    this.isEditing = false;
    this.onClear();
  }

  onClear() {
    this.user.name = "";
    this.user.username = "";
    this.user.email = "";
  }

  scrollTo(pageSection: string): void {
    let element = document.getElementById(pageSection);
    if (element)
      element.scrollIntoView({ behavior: "smooth" });
  }

  editItem(user: IUser): void {
    this.editedItemIndex = this.usersList1.indexOf(user);
    this.usersList1.splice(this.editedItemIndex, 1);
    this.editedUser = user;
    this.isEditing = true;
  }

  deleteItem(user: IUser): void {
    let userIndex = this.usersList1.indexOf(user);
    this.usersList1.splice(userIndex, 1);
  }

}


