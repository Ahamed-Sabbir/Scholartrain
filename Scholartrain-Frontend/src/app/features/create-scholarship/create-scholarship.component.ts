import { Component } from '@angular/core';
import { ScholarshipService } from '../../services/scholarship.service';

interface Scholarship {
  title: string;
  description: string;
  deadline: Date;
  imageUrl?: string;
  eligibility: string;
  link: string;
  tags: string[]; // Ensure tags is an array of strings
}
@Component({
  selector: 'app-create-scholarship',
  templateUrl: './create-scholarship.component.html',
  styleUrl: './create-scholarship.component.scss'
})
export class CreateScholarshipComponent {
  scholarship: Scholarship = {
    title: '',
    description: '',
    eligibility: '',
    deadline: new Date(),
    tags: [],
    imageUrl: '',
    link: ''
  };

  constructor(private scholarshipService: ScholarshipService) {}

  submitScholarship(): void {
    // Prepare tags from comma-separated string

    if (typeof this.scholarship.tags === 'string') {
      this.scholarship.tags = (this.scholarship.tags as string).split(',').map(tag => tag.trim());
  }

    this.scholarshipService.createScholarship(this.scholarship).subscribe({
      next: (response) => {
        console.log('Scholarship created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating scholarship:', error);
      }
    });
  }
}
