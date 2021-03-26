import { IUser } from './../../first-page.component';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnChanges {
  @Input() user: IUser = { name: '', username: '', email: '' };
  @Input() isEditing = false;
  @Output() onFormSubmited = new EventEmitter<IUser>();


  matcher = new MyErrorStateMatcher();

  public userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["user"]) {
      this.userForm.setValue(changes["user"].currentValue);
      this.userForm.markAsPristine();
    }
  }

  ngOnInit(): void { }

  public onSubmit(formDirective: FormGroupDirective): void {
    let user: IUser = this.userForm.value;
    this.onFormSubmited.emit(user);
    this.userForm.reset();
    formDirective.resetForm();
  }
}
