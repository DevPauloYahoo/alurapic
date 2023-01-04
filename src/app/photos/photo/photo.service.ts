import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Photo } from './photo';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(username: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${API_URL}/${username}/photos`);
  }

  listFromUserPaginated(username: string, page: number): Observable<Photo[]> {
    const params = new HttpParams().append('page', page);

    return this.http.get<Photo[]>(`${API_URL}/${username}/photos`, { params });
  }

  findById(id: any): Observable<Photo> {
    return this.http.get<Photo>(`${API_URL}/photos/${id}`);
  }

  upload(description: string, allowComments: string, file: File): Observable<Object> {
    const formData = new FormData();
    formData.set('description', description);
    formData.set('allowComments', allowComments ? 'true' : 'false');
    formData.set('imageFile', file);

    return this.http.post(`${API_URL}/photos/upload`, formData);
  }
}
