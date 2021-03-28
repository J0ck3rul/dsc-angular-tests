import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMRoutingModule } from './list-m-routing.module';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { CuprinsComponent } from './pages/first-page/components/cuprins/cuprins.component';
import { FormComponent } from './pages/first-page/components/form/form.component';
import { ListComponent } from './pages/first-page/components/list/list.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogComponent } from './pages/first-page/components/list/components/dialog/dialog.component';


@NgModule({
  declarations: [FirstPageComponent, CuprinsComponent, FormComponent, ListComponent, DialogComponent],
  imports: [
    CommonModule,
    ListMRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    MatDialogModule,
    MatButtonModule
  ],
})
export class ListMModule { }
