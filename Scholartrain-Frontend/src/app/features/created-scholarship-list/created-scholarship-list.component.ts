import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from '../../services/scholarship.service';
import { Router } from '@angular/router';

// Define the model for ScholarshipDtoUniversity
interface ScholarshipDtoUniversity {
  id: number;
  title: string;
  deadline: Date;
  eligibility: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  totalApplied: number;
}

@Component({
  selector: 'app-created-scholarship-list',
  templateUrl: './created-scholarship-list.component.html',
  styleUrl: './created-scholarship-list.component.scss'
})
export class CreatedScholarshipListComponent implements OnInit {
  scholarships: ScholarshipDtoUniversity[] = [];
  scholarshipId:string = "scholarshipId";

  constructor(
    private scholarshipService:ScholarshipService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.scholarshipService.getAllCreatedScholarships().subscribe({
      next:(response)=>{
        this.scholarships = response;
      },
      error:(response)=>{
        alert("Error getting created Scholarships");
      }
    });
  }
  // Function to handle click event on a scholarship card
  onCardClick(id: number): void {
    localStorage.setItem(this.scholarshipId, JSON.stringify(id));
    this.router.navigate(['/created-list-details']);
  }
  formatDeadline(deadline: Date): string {
    return new Date(deadline).toLocaleDateString();
  }

}
