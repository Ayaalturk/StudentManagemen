import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/service/students.service';
@Component({
  selector: 'app-students-list-view',
  templateUrl: './students-list-view.component.html',
  styleUrls: ['./students-list-view.component.css']
})
export class StudentsListViewComponent implements OnInit {
  public users:any;


  constructor(public studentsService:StudentsService,) { }
  
  ngOnInit(): void {
    this.studentsService.getUsers('https://jsonplaceholder.typicode.com/users')
.subscribe(
result => {
let response:any = result;
this.users = response; 
},
error => {
console.log(error);
});
}
}
