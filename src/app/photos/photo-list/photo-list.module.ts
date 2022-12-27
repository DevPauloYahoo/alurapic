import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from '../../shared/components/card/card.module';
import { PhotoModule } from '../photo/photo.module';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    LoadButtonComponent,
    PhotosComponent,
    FilterByDescriptionPipe,
  ],
  imports: [CommonModule, PhotoModule, CardModule],
})
export class PhotoListModule {}
