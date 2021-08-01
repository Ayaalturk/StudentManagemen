import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/service/students.service';
@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {
  public students:any;

  constructor(public studentsService:StudentsService) {
  
     }

  

  ngOnInit(): void {
    this.studentsService.getusers('https://jsonplaceholder.typicode.com/users')
    .subscribe(
    result => {
    let response:any = result;
    this.students = response; 
    },
    error => {
    console.log(error);
    });
    }
    
  }
    

    


