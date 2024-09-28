import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from '../../services/scholarship.service';

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

  constructor(private scholarshipService:ScholarshipService) {}

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
  onCardClick(scholarship: ScholarshipDtoUniversity): void {
    // For now, just log the scholarship title (you can replace this with your desired action)
    console.log(`Clicked on: ${scholarship.title}`);
    // You can redirect to a details page, or trigger a modal popup here
    // Example: this.router.navigate(['/scholarship-details', scholarship.id]);
  }
  formatDeadline(deadline: Date): string {
    return new Date(deadline).toLocaleDateString();
  }

}
