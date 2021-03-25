import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IUser } from '../../first-page.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() onFormSubmited = new EventEmitter<IUser>();

  public userForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  public onSubmit(): void {
    let user: IUser = this.userForm.value;
    this.onFormSubmited.emit(user);
    this.userForm.reset();
  }
}
