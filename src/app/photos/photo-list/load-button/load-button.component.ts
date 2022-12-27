import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.scss'],
})
export class LoadButtonComponent {
  @Input() hasMore: boolean = false;
}
