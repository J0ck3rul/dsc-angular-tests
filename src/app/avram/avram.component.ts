import { Component, OnInit } from '@angular/core';
import { ApiService } from './api-service';
import { User } from './user';

@Component({
  selector: 'app-avram',
  templateUrl: './avram.component.html',
  styleUrls: ['./avram.component.scss']
})
export class AvramComponent implements OnInit {

  constructor() { }

  bloodTypes = ['0', 'A', 'B', 'AB'];
  rhs = ['positive', 'negative'];
  formData = ["username: ", "email: ", "phone-number: ", 
               "blood-type: ", "rh: ", "subscribe: "]

  userInfoes = new User('', '', '', 'default', 'default', false);
  bloodTypeFlag = true;
  rhFlag = true;
  usersList:Array<User> = []
  // my_api_service = new ApiService();


  validateBloodType(value: string){
    if (value === "default"){
      this.bloodTypeFlag = true;
    }
    else {
      this.bloodTypeFlag = false;
    }
  }

  validateRh(value: string){
    if (value === "default"){
      this.rhFlag = true;
    }
    else {
      this.rhFlag = false;
    }
  }

  onSubmit(){
    console.log(this.userInfoes);
    const userCopy = JSON.parse(JSON.stringify(this.userInfoes))
    this.usersList.push(userCopy)
  }

  ngOnInit(): void {
  }

}
