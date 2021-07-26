import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: StudentsListViewComponent
  },
];

@NgModule({
  declarations: [
    StudentsListViewComponent,
    StudentDialogComponent,
    EditStudentDialogComponent,
  ],
  exports: [
    // No need to export when using module as route
    /*   StudentsListViewComponent,
      StudentDialogComponent,
      EditStudentDialogComponent */
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class StudentsModule {
  // Dont Add Code in module creation
  // Check this ref for more info https://angular.io/guide/feature-modules
  /*  public name: string;
   public Id: number;
   public PhonNumber: number;
   public Address: string;
   public TakenCourses:courses[]

   constructor(Name:string, id: number, Phone:number,Address:string,Taken:courses[]){
     this.name =Name;
     this.Id = id;
     this.PhonNumber =Phone;
     this.Address =Address;
     this.TakenCourses =Taken;} */
}



