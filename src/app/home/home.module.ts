import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';

@NgModule({
  declarations: [SigninComponent, SignupComponent, HomeComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HomeRoutingModule],
  providers: [SignupService],
})
export class HomeModule {}
