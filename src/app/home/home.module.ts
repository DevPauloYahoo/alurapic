import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';

@NgModule({
  declarations: [SigninComponent, SignoutComponent],
  imports: [CommonModule],
})
export class HomeModule {}
