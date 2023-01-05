import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertGlobalComponent } from './components/alert-global/alert-global.component';
import { DarkenOnHoverModule } from './directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [AlertGlobalComponent],
  imports: [CommonModule, DarkenOnHoverModule],
})
export class SharedModule {}
