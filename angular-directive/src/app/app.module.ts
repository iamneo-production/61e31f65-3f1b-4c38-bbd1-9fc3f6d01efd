import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { NormalComponent } from './normal/normal.component';
import { OneclickComponent } from './oneclick/oneclick.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    NormalComponent,
    OneclickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
