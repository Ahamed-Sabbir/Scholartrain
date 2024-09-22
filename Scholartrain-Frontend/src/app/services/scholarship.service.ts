import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scholarship } from '../features/post/post.component';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {
  private apiUrl: string = "http://localhost:8080/api/scholarship";

  constructor(private httpClient: HttpClient) { }

  getScholarships(page: number, size: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.httpClient.get<any>(`${this.apiUrl}/all`,{params});
  }
}
