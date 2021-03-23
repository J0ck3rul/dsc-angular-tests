import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PageComponent } from './maria/page/page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvramComponent } from './avram/avram.component';

@NgModule({
  declarations: [
    AppComponent,
    AvramComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
