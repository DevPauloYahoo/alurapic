import { Component, OnInit } from '@angular/core';

import { Photo } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.listFromUser('flavio').subscribe({
      next: (photos) => (this.photos = photos),
    });
  }
}
