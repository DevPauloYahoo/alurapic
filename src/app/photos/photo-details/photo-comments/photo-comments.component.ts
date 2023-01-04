import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoComment } from '../../photo/photo-comment.interface';
import { PhotoService } from '../../photo/photo.service';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss'],
})
export class PhotoCommentsComponent implements OnInit {
  comments$: Observable<PhotoComment[]> = new Observable<PhotoComment[]>();
  @Input() photoId: number | undefined;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId!);
  }
}
