import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardModule } from '../../shared/components/card/card.module';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoModule } from '../photo/photo.module';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    LoadButtonComponent,
    PhotosComponent,
    FilterByDescriptionPipe,
    SearchComponent,
  ],
  imports: [CommonModule, RouterModule, PhotoModule, CardModule, DarkenOnHoverModule],
})
export class PhotoListModule {}
