import { IUser } from './../../first-page.component';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnChanges {
  @Input() user: IUser = { name: '', username: '', email: '' };
  @Output() onFormSubmited = new EventEmitter<IUser>();

  public userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.email]),
  });

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.userForm.setValue(changes["user"].currentValue);
    this.userForm.markAsPristine();
  }

  ngOnInit(): void { }

  public onSubmit(formDirective: FormGroupDirective): void {
    let user: IUser = this.userForm.value;
    this.onFormSubmited.emit(user);
    this.userForm.reset();
    formDirective.resetForm();
  }
}
