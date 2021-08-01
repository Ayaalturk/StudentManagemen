import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/service/courses.service';
import { courses } from '../courses.model';

@Component({
  selector: 'app-new-course-dialog',
  templateUrl: './new-course-dialog.component.html',
  styleUrls: ['./new-course-dialog.component.css']
})
export class NewCourseDialogComponent implements OnInit {
  public data!:courses;
  constructor(public courseService:CoursesService,
    public http:HttpClient,) { }

  ngOnInit(): void {
   
  }
  
    onSubmit(data:courses){
    this.http.post('https://jsonplaceholder.typicode.com/posts',data)
    .subscribe((result)=>{
    console.warn("result",result)})
    console.warn(data)

  }

  
}
