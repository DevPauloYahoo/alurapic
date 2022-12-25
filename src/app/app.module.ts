import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoModule } from './photos/photo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, PhotoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}