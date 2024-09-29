import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FileUploadDownloadService {
  private baseUrl = 'http://localhost:8080/file';

  constructor(private http: HttpClient) {}

  upload(files: File[]): Observable<string[]> {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));
    return this.http.post<string[]>(`${this.baseUrl}/upload`, formData);
  }

  download(filename: string): Observable<HttpResponse<Blob>> {
    return this.http.get(`${this.baseUrl}/download/${filename}`, {
      observe: 'response',
      responseType: 'blob'
    });
  }

  saveFile(blob: Blob, filename: string): void {
    const file = new Blob([blob], { type: blob.type });
    saveAs(file, filename);
  }
}