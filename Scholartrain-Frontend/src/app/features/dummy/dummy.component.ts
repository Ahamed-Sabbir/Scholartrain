import { Component } from '@angular/core';
import { FileUploadDownloadService } from '../../services/file-upload-download.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.scss'
})
export class DummyComponent {
  selectedFiles: File[] = [];
  uploadedFiles: string[] = [];

  constructor(private fileService: FileUploadDownloadService) {}

  onFileSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
  }

  uploadFiles(): void {
    if (this.selectedFiles.length > 0) {
      this.fileService.upload(this.selectedFiles).subscribe({
        next: (response) => {
          this.uploadedFiles = response;
          alert('Files uploaded successfully');
        },
        error: (err) => {
          console.error(err);
          alert('File upload failed');
        }
      });
    } else {
      alert('Please select files to upload.');
    }
  }

  downloadFile(filename: string): void {
    this.fileService.download(filename).subscribe({
      next: (response) => {
        const contentDisposition = response.headers.get('Content-Disposition');
        const fileNameMatch = contentDisposition ? contentDisposition.split('filename=')[1].trim() : filename;
        this.fileService.saveFile(response.body as Blob, fileNameMatch);
      },
      error: (err) => {
        console.error(err);
        alert('File download failed');
      }
    });
  }
}
