import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IUser } from '../../first-page.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() onFormSubmited = new EventEmitter<IUser>();

  userForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let user: IUser = { name: this.userForm.controls.name.value, username: this.userForm.controls.username.value, email: this.userForm.controls.email.value }
    this.onFormSubmited.emit(user);
    this.userForm.reset();
  }

}
