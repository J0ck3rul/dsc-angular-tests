import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first-page',
  },
  {
    path: 'page1',
    pathMatch: 'full',
    loadChildren: () => import('./list-m/list-m.module').then(m => m.ListMModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
