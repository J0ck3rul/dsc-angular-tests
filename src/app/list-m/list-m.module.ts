
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMRoutingModule } from './list-m-routing.module';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { CuprinsComponent } from './pages/first-page/components/cuprins/cuprins.component';
import { FormComponent } from './pages/first-page/components/form/form.component';
import { ListComponent } from './pages/first-page/components/list/list.component';


@NgModule({
  declarations: [FirstPageComponent, CuprinsComponent, FormComponent, ListComponent],
  imports: [
    CommonModule,
    ListMRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ListMModule { }
