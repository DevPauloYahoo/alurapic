import { NgModule } from '@angular/core';

import { PhotoDetailsModule } from './photo-details/photo-details.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
  declarations: [],
  imports: [PhotoModule, PhotoFormModule, PhotoListModule, PhotoDetailsModule],
  exports: [],
})
export class PhotosModule {}
