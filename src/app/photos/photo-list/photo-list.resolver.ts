import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Injectable({
  providedIn: 'root',
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  constructor(private photoService: PhotoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Photo[]> {
    const username = route.params['username'];
    return this.photoService.listFromUserPaginated(username, 1);
  }
}
