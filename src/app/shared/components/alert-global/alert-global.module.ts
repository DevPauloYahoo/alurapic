import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertGlobalComponent } from './alert-global.component';

@NgModule({
  declarations: [AlertGlobalComponent],
  imports: [CommonModule],
  exports: [AlertGlobalComponent],
})
export class AlertGlobalModule {}
