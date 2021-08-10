import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonbarComponent } from './components/buttonbar/buttonbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonbarComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
