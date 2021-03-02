import { Component, OnInit } from '@angular/core';

export interface IUser {
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {

  user: IUser = { name: "", username: "", email: "" };
  
  usersList1: Array<IUser>=[];
  usersList2: Array<IUser>=[];

  constructor() {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => json.forEach((element: any) => {
       let newUser : IUser = {name: element.name, username:element.username, email:element.email};
        this.usersList2.push(Object.assign({}, newUser));
      }))
  }

  ngOnInit() {

  }

    

  addToList() {
    this.usersList1.push(Object.assign({}, this.user));
    this.onClear();
  }

  onClear() {
    this.user.name = "";
    this.user.username = "";
    this.user.email = "";
  }

  scroll(element: HTMLElement):void{
    element.scrollIntoView({ behavior: "smooth"});
  }

}
