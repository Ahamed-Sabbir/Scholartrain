import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from '../../services/scholarship.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { FileUploadDownloadService } from '../../services/file-upload-download.service';

export interface Scholarship {
  id: number;
  title: string;
  deadline: Date;
  eligibility: string;
  description: string;
  tags: any[];
  imageUrl?: string;
  link: string;
  isApplied:boolean;
}

@Component({
  selector: 'app-scholarship-details',
  templateUrl: './scholarship-details.component.html',
  styleUrl: './scholarship-details.component.scss'
})
export class ScholarshipDetailsComponent implements OnInit {
  scholarship:any;
  id = 1;
  scholarshipId:string = "scholarshipId";
  selectedFile: File | null = null; 

  constructor(
    private scholarshipService:ScholarshipService,
    private router: Router,
    // print sharedDataService: SharedDataService
  ){}
  
  ngOnInit(): void {
    this.setId()
    this.getScholarshipDetails();
  }

  getScholarshipDetails():void{
    this.scholarshipService.getScholarshipById(this.id).subscribe({
      next: (data) =>{
        this.scholarship = data;
      },
      error:(data)=>{
        console.error('Error fetching scholarship:', data);
        this.router.navigate(['/test']);
      }
    });
  }

  setId():void{
    const storedData = localStorage.getItem(this.scholarshipId);
    if(storedData){
      this.id = JSON.parse(storedData);
    }
    else{
      this.router.navigate(['/test']);
    }
  }

  // Capture the selected file from the input
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  apply(scholarshipId:number){
    if (!this.selectedFile) {
      alert("Please select a file before applying.");
      return;
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.scholarshipService.applyToScholarship(scholarshipId, formData).subscribe({
      next: (response) => {
        console.log(response);
        alert("Applied to scholarship successfully!");

        // Update UI to show that the user has applied
        const appliedScholarship = (this.scholarship.id === scholarshipId);
        if (appliedScholarship) {
          this.scholarship.isApplied = true;
        }
      },
      error: (response) => {
        console.error(response);
        alert("Failed to apply to scholarship.");
      }
    });
  }
}
