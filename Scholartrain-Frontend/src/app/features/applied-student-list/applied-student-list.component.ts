import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from '../../services/scholarship.service';
import { Router } from '@angular/router';

interface ApplicationDto{
  id:number;
  studentName:string;
  fileUrl:string;
}

@Component({
  selector: 'app-applied-student-list',
  templateUrl: './applied-student-list.component.html',
  styleUrl: './applied-student-list.component.scss'
})
export class AppliedStudentListComponent implements OnInit {
  applicationDtos:ApplicationDto[] = [];
  id = 1;
  scholarshipId:string = "scholarshipId";
  
  constructor(
    private scholarshipService :ScholarshipService,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.setId();
    this.getApplications();
    console.log(this.applicationDtos);
  }
  setId():void{
    const storedData = localStorage.getItem(this.scholarshipId);
    if(storedData){
      this.id = JSON.parse(storedData);
    }
    else{
      this.router.navigate(['/created-list']);
    }
  }
  getApplications(): void {
    this.scholarshipService.getAllApplicationDto(this.id).subscribe({
      next: (response) => {
        this.applicationDtos = response;
      },
      error: (response) => {
        console.error("Error getting the applicant list for Scholarship ID " + this.id);
      }
    });
  }

  downloadFile(applicationId: number, fileName: string): void {
    this.scholarshipService.downloadApplicationFile(applicationId).subscribe({
      next: (response: Blob) => {
        const blob = new Blob([response], { type: response.type });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Error downloading file:', err);
      }
    });
  }
}
