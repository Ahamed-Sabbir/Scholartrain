import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // For navigation

interface Scholarship {
  id: number;
  title: string;
  deadline: Date;
  eligibility: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  scholarships: Scholarship[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fetchScholarships();
  }

  fetchScholarships(): void {
    this.scholarships = [
      {
        id: 1,
        title: 'Fullbright Scholarship',
        deadline: new Date('2024-12-01'),
        eligibility: 'Open to graduate students worldwide',
        description: 'The Fullbright Scholarship provides full funding for graduate studies abroad.',
        tags: ['Graduate', 'International', 'Full Funding'],
        imageUrl: 'https://i.postimg.cc/wvWyGF7r/dosa.jpg',
        link: 'https://fullbright.org/apply'
      },
      {
        id: 2,
        title: 'DAAD Scholarship',
        deadline: new Date('2024-10-15'),
        eligibility: 'Undergraduate and graduate students in Germany',
        description: 'The DAAD Scholarship is for international students wanting to study in Germany.',
        tags: ['Undergraduate', 'Graduate', 'Germany'],
        imageUrl: 'https://i.postimg.cc/wvWyGF7r/dosa.jpg',
        link: 'https://daad.de/apply'
      },
      {
        id: 2,
        title: 'DAAD Scholarship',
        deadline: new Date('2024-10-15'),
        eligibility: 'Undergraduate and graduate students in Germany',
        description: 'The DAAD Scholarship is for international students wanting to study in Germany.',
        tags: ['Undergraduate', 'Graduate', 'Germany'],
        imageUrl: 'https://i.postimg.cc/wvWyGF7r/dosa.jpg',
        link: 'https://daad.de/apply'
      }
    ];
  }

  apply(link: string): void {
    window.open(link, '_blank');
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

  // Navigate to details page
  viewDetails(id: number): void {
    this.router.navigate(['/scholarship', id]);
  }
}
