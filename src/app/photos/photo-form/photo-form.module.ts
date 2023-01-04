import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ImediateClickModule } from '../../shared/directives/imediate-click/imediate-click.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [CommonModule, ReactiveFormsModule, PhotoModule, ImediateClickModule],
})
export class PhotoFormModule {}
