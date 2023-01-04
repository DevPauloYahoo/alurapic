import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoComment } from '../photo/photo-comment.interface';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo> = new Observable<Photo>();
  comments$: Observable<PhotoComment[]> = new Observable<PhotoComment[]>();

  constructor(private route: ActivatedRoute, private photoService: PhotoService) {}

  ngOnInit(): void {
    const photoId: number = this.route.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(photoId);
    this.comments$ = this.photoService.getComments(photoId);
  }
}
