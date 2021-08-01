import { Component, OnInit } from '@angular/core';
import { courses } from 'src/app/courses/courses.model';
import { SharedService } from 'src/app/service/shared.service';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-students-list-view',
  templateUrl: './students-list-view.component.html',
  styleUrls: ['./students-list-view.component.css']
})
export class StudentsListViewComponent implements OnInit {
  public users:any;
  Available!:courses[];
 

  constructor(public studentsService:StudentsService,public sharedService:SharedService) { }
  
  ngOnInit(): void {

    this.studentsService.getusers('https://jsonplaceholder.typicode.com/users')
    .subscribe(
    result => {
    let response:any = result;
    this.users = response; 
    },
    error => {
    console.log(error);
    });

    this.Available= this.sharedService.getAvailableCourse()

 }


  
}
