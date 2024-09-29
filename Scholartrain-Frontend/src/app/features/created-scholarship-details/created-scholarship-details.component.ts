import { Component, OnInit } from '@angular/core';
import { Scholarship } from '../post/post.component';
import { ScholarshipService } from '../../services/scholarship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-created-scholarship-details',
  templateUrl: './created-scholarship-details.component.html',
  styleUrl: './created-scholarship-details.component.scss'
})
export class CreatedScholarshipDetailsComponent implements OnInit{
  scholarship:any;
  id = 1;
  scholarshipId:string = "scholarshipId";

  constructor(
    private scholarshipService:ScholarshipService,
    private router: Router,
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
      this.router.navigate(['/created-list']);
    }
  }

}
