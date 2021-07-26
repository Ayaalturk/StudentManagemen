import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListViewComponent } from './courses-list-view/courses-list-view.component';
import { NewCourseDialogComponent } from './new-course-dialog/new-course-dialog.component';
import { EditCourseDialogComponent } from './edit-course-dialog/edit-course-dialog.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: CoursesListViewComponent
  },
];

@NgModule({
  declarations: [
    CoursesListViewComponent,
    NewCourseDialogComponent,
    EditCourseDialogComponent
  ],
  exports: [
    // No need to export when using module as route

    /* CoursesListViewComponent,
    NewCourseDialogComponent,
    EditCourseDialogComponent */
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class CoursesModule { }
