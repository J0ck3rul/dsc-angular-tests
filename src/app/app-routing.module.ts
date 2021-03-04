import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvramComponent } from './avram/avram.component';
import { PageComponent } from './maria/page/page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first-page',
  },
  { path: 'first-page', component: AvramComponent },
  {path: 'first-page-2', component: PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
