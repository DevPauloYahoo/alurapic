import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DarkenOnHoverModule } from './directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DarkenOnHoverModule],
})
export class SharedModule {}
