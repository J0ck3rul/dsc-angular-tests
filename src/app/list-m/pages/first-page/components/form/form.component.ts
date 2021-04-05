import { IUser } from './../../first-page.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
export class FormComponent implements OnInit {
  isEditing = false;
  dbIndex = 0;
  sub: Subscription | undefined;


  matcher = new MyErrorStateMatcher();

  public userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      var listElements = JSON.parse(localStorage.getItem('list') || '[]');
      listElements.forEach((element: { id: string; name: AbstractControl; username: AbstractControl; email: AbstractControl; }, i: number) => {


        if (element['id'] == id) {
          this.userForm.controls['name'].setValue(element['name']);
          this.userForm.controls['username'].setValue(element['username']);
          this.userForm.controls['email'].setValue(element['email']);
          this.isEditing = true;
          this.dbIndex = i;
          return;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  public onCancel() {
    this.userForm.reset();
    this.router.navigate(['page/list']);
  }

  public onSubmit(formDirective: FormGroupDirective): void {
    let user: IUser = this.userForm.value;
    this.userForm.reset();
    formDirective.resetForm();
    var listElements = JSON.parse(localStorage.getItem('list') || '[]');
    var lastId = listElements.length ? listElements[listElements.length - 1]['id'] : 0;
    lastId++;

    if (this.isEditing)
      listElements.splice(this.dbIndex, 1, { 'id': lastId, ...user });
    else
      listElements.push({ 'id': lastId, ...user });
    localStorage.setItem('list', JSON.stringify(listElements));
    this.router.navigate(['page/list']);
  }
}
