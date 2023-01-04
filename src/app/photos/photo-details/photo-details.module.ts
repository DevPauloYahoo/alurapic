import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, PhotoModule],
})
export class PhotoDetailsModule {}
