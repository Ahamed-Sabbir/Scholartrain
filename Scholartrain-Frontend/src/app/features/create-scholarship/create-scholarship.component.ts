import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from '../../services/scholarship.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Scholarship {
  title: string;
  description: string;
  deadline: Date;
  imageUrl?: string;
  eligibility: string;
  link: string;
  tags: string[];
}

interface Tag{
  name:string,
}


@Component({
  selector: 'app-create-scholarship',
  templateUrl: './create-scholarship.component.html',
  styleUrls: ['./create-scholarship.component.scss']
})
export class CreateScholarshipComponent implements OnInit {
  scholarship!: Scholarship;
  tags!: Tag[];
  formGroup!: FormGroup;
  selectedTags!:Tag[]

  ngOnInit() {
    this.tags = [
      { name: 'Full Funded' },
      { name: 'CSE' },
      { name: 'EEE' },
      { name: 'BBA' },
      { name: 'Economics' }
    ];

    this.formGroup = new FormBuilder().group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      deadline: [new Date() ,Validators.required],
      imageUrl: ['',Validators.required],
      eligibility: ['',Validators.required],
      link: ['',Validators.required],
      selectedTags:[[],Validators.required],
    });
  }

  constructor(private scholarshipService: ScholarshipService) {}

  submitScholarship(): void {
    // Extract form values
    const formValues = this.formGroup.value;

    // Prepare the scholarship object
    const newScholarship: Scholarship = {
      title: formValues.title,
      description: formValues.description,
      eligibility: formValues.eligibility,
      deadline: formValues.deadline,
      imageUrl: formValues.imageUrl,
      link: formValues.link,
      tags: formValues.selectedTags.map((tag: Tag) => tag.name)
    };

    //calling backend using scholarship
    this.scholarshipService.createScholarship(newScholarship).subscribe({
      next: (response) => {
        console.log('Scholarship created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating scholarship:', error);
      }
    });
  }
}
