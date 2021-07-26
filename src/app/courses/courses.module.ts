import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListViewComponent } from './courses-list-view/courses-list-view.component';
import { NewCourseDialogComponent } from './new-course-dialog/new-course-dialog.component';
import { EditCourseDialogComponent } from './edit-course-dialog/edit-course-dialog.component';



@NgModule({
  declarations: [
    CoursesListViewComponent,
    NewCourseDialogComponent,
    EditCourseDialogComponent
  ],
  exports:[
    CoursesListViewComponent,
    NewCourseDialogComponent,
    EditCourseDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
