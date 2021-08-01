import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: StudentsListViewComponent,
  },
  {path:'user/edit/:id',component: EditStudentDialogComponent,} ,
  {path:'dialog',component: StudentDialogComponent,}
];

@NgModule({
  declarations: [
    StudentsListViewComponent,
    StudentDialogComponent,
    EditStudentDialogComponent,
  ],
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  

  ]
})
export class StudentsModule {}
  // Dont Add Code in module creation
  // Check this ref for more info https://angular.io/guide/feature-modules
  



