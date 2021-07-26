import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component';
import { courses } from '../courses/courses.model';

@NgModule({
  declarations: [
    StudentsListViewComponent,
    StudentDialogComponent,
    EditStudentDialogComponent,
  
  ],
  exports:[
    StudentsListViewComponent,
    StudentDialogComponent,
    EditStudentDialogComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class StudentsModule {

  public name: string;
  public Id: number;
  public PhonNumber: number;
  public Address: string;
  public TakenCourses:courses[]

  constructor(Name:string, id: number, Phone:number,Address:string,Taken:courses[]){
    this.name =Name;
    this.Id = id;
    this.PhonNumber =Phone;
    this.Address =Address;
    this.TakenCourses =Taken;}
}
    

 
