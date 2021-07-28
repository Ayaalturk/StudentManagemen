import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListViewComponent } from './courses-list-view/courses-list-view.component';
import { NewCourseDialogComponent } from './new-course-dialog/new-course-dialog.component';
import { EditCourseDialogComponent } from './edit-course-dialog/edit-course-dialog.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '', component: CoursesListViewComponent
  },
  {path:'course/edit/:id',component: EditCourseDialogComponent,} 
];

@NgModule({
  declarations: [
    CoursesListViewComponent,
    NewCourseDialogComponent,
    EditCourseDialogComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class CoursesModule { }
