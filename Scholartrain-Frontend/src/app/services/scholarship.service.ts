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

  getAllScholarships(page: number, size: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.httpClient.get<any>(`${this.apiUrl}/all`,{params});
  }
  getAllApplicationDto(id:number):Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}/${id}/applications`);
  }

  getScholarshipById(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }
  getScholarshipTags(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/tags`);
  }

  createScholarship(scholarship: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/create`, scholarship);
  }

  applyToScholarship(id: number, formData: FormData): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/apply/${id}`, formData);
  }

  /// Method to download the application file by applicationId
  downloadApplicationFile(applicationId: number): Observable<Blob> {
    return this.httpClient.get(`http://localhost:8080/applications/${applicationId}/download`, { responseType: 'blob' });
  }

  getAppliedScholarships(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/applied`);
  }

  getAllCreatedScholarships(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/created`);
  }
}
