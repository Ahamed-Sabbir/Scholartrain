import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
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
  creator:any;
  isApplied:boolean;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  scholarships: Scholarship[] = [];
  page = 0;
  size = 10;
  loading = false;
  hasMore = true; // Track if more scholarships are available
  scrollDistance = 2;
  scholarshipId:string = "scholarshipId";

  constructor(private router: Router, private scholarshipService: ScholarshipService) { }

  ngOnInit(): void {
    this.loadScholarships();
  }

  loadScholarships(): void {
    if (this.loading || !this.hasMore) return; // Prevent multiple requests
    this.loading = true;

    this.scholarshipService.getAllScholarships(this.page, this.size).subscribe({
      next: (data) => {
        if (data.content.length > 0) {
          this.scholarships = [...this.scholarships, ...data.content]; // Append new data
          this.page++;
        } else {
          this.hasMore = false; // No more data available
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching scholarships:', error);
        this.loading = false;
      }
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const lastScholarship = document.querySelector('.post-card-container:last-child') as HTMLElement;

    if (lastScholarship) {
      const lastScholarshipRect = lastScholarship.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the last scholarship is in the viewport
      if (lastScholarshipRect.bottom <= windowHeight && this.hasMore) {
        this.loadScholarships(); // Load more scholarships if the last one is visible
      }
    }
  }
  apply(scholarshipId:number){
    this.scholarshipService.applyToScholarship(scholarshipId).subscribe({
      next: (response)=>{
        console.log(response);
        alert("Applied to scholarship successfully!");
      },
      error: (response)=>{
        console.error(response);
        alert("Failed to apply to scholarship.");
      }
    });
  }

  likePost(id: number): void {
    console.log(`Liked post with ID: ${id}`);
  }

  commentOnPost(id: number): void {
    console.log(`Comment on post with ID: ${id}`);
  }

  sharePost(id: number): void {
    console.log(`Share post with ID: ${id}`);
  }

  viewDetails(id: number): void {
    localStorage.setItem(this.scholarshipId, JSON.stringify(id));
    this.router.navigate(['/scholarship-details']);
  }
}
