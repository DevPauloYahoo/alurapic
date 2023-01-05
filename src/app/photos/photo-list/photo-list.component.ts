import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';

  hasMore: boolean = true;
  currentPage: number = 1;
  username: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.username = params['userName'];
        this.photos = this.activatedRoute.snapshot.data['photos'];
      },
    });
  }

  load() {
    this.photoService.listFromUserPaginated(this.username, ++this.currentPage).subscribe({
      next: (photos) => {
        this.filter = '';
        this.photos = this.photos.concat(...photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      },
    });
  }
}
