import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from '../../services/scholarship.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Scholarship {
  title: string;
  description: string;
  deadline: string;
  imageUrl?: string;
  eligibility: string;
  link: string;
  tags: Tag[];
}

interface Tag{
  id:number;
  tag:string;
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
  defaultImageLink:string = "https://i.postimg.cc/gjr82W0v/scholarship.webp";

  ngOnInit() {
    this.scholarshipService.getScholarshipTags().subscribe({
      next:(response)=>{
        this.tags = response;
      },
      error: (response)=>{
        alert("error getting the tags data");
      }
    });

    this.formGroup = new FormBuilder().group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      deadline: [new Date() ,Validators.required],
      imageUrl: [''],
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
      deadline: new Date(formValues.deadline).toISOString(),
      imageUrl: formValues.imageUrl,
      link: formValues.link,
      tags: formValues.selectedTags,
    };
    if(!newScholarship.imageUrl){
      newScholarship.imageUrl = this.defaultImageLink;
    }

    console.log(newScholarship);

    //calling backend using scholarship
    this.scholarshipService.createScholarship(newScholarship).subscribe({
      next: (response) => {
        console.log('Scholarship created successfully:');
      },
      error: (error) => {
        console.error('Error creating scholarship:');
      }
    });
  }
}
