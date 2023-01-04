import { NgModule } from '@angular/core';

import { PhotoDetailsModule } from './photo-details/photo-details.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
  declarations: [],
  imports: [PhotoFormModule, PhotoListModule, PhotoDetailsModule],
  exports: [],
})
export class PhotosModule {}
