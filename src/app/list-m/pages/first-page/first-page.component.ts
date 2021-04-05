import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services';
export interface IUser {
  id?: number,
  name: string;
  username: string;
  email: string;
}

@Component({
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  constructor(private userService: UserService) {
    console.log(localStorage);
  }

  ngOnInit(): void {
  }




}


