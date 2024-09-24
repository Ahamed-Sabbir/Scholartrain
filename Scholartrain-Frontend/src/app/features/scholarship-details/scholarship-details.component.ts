import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from '../../services/scholarship.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';

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
  apply(scholarshipId:number){
    this.scholarshipService.applyToScholarship(this.id).subscribe({
      next: (response)=>{
        console.log(response);
        alert("Applied to scholarship successfully!");

        const appliedScholarship = (this.scholarship.id === scholarshipId);
        if (appliedScholarship) {
          this.scholarship.isApplied = true;
        }
      },
      error: (response)=>{
        console.error(response);
        alert("Failed to apply to scholarship.");
      }
    });
  }
}
