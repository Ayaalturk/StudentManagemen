import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/service/courses.service';


@Component({
  selector: 'app-courses-list-view',
  templateUrl: './courses-list-view.component.html',
  styleUrls: ['./courses-list-view.component.css']
})
export class CoursesListViewComponent implements OnInit {
  course: any;

  constructor(public coursesService:CoursesService){}

  ngOnInit(): void {
    this.coursesService.getCourses('https://jsonplaceholder.typicode.com/comments')
    .subscribe(
    result => {
    let response:any = result;
    this.course = response; 
    },
    error => {
    console.log(error);
    });
    }

    getMessage(){
      alert("This course is not available");
    }

    addOnstudents(){
      alert("Added successfully");

    }
    
  }
    
    
    
  