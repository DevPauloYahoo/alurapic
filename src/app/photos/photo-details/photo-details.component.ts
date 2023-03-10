import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AlertGlobalService } from '../../shared/components/alert-global/alert-global.service';
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
    private router: Router,
    private photoService: PhotoService,
    private alertGlobalService: AlertGlobalService,
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe({
      error: (err) => {
        this.router.navigate(['not-found']).then(() => console.log(err.message));
      },
    });
  }

  remove() {
    this.photoService.removePhotos(this.photoId).subscribe({
      next: () => {
        this.router.navigate(['']).then(() => {
          this.alertGlobalService.success('Foto removida');
        });
      },
      error: (err) => {
        console.log(err.message);
        this.alertGlobalService.warning('Erro ao remover foto');
      },
    });
  }
}
