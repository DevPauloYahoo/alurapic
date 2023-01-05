import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo> = new Observable<Photo>();
  photoId!: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(this.photoId);
  }

  remove() {
    this.photoService.removePhotos(this.photoId).subscribe({
      next: () => this.router.navigate(['']),
      error: (err) => console.log(err.message),
    });
  }
}
