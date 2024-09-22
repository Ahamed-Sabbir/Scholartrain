import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from '../../services/scholarship.service';

export interface Scholarship {
  id: number;
  title: string;
  deadline: Date;
  eligibility: string;
  description: string;
  tags: any[];
  imageUrl?: string;
  link: string;
}

@Component({
  selector: 'app-scholarship-details',
  templateUrl: './scholarship-details.component.html',
  styleUrl: './scholarship-details.component.scss'
})
export class ScholarshipDetailsComponent implements OnInit {
  scholarShip!:Scholarship;
  id = 1;

  constructor(private scholarshipService:ScholarshipService){}
  
  ngOnInit(): void {
    this.getScholarshipDetails();
  }

  getScholarshipDetails():void{
    this.scholarshipService.getScholarshipById(this.id).subscribe({
      next: (data) =>{
        this.scholarShip = data;
      },
      error:(data)=>{
        console.error('Error fetching scholarship:', data);
      }
    });
  }
}
