import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCourseDialogComponent } from './courses/edit-course-dialog/edit-course-dialog.component';
import { EditStudentDialogComponent } from './students/edit-student-dialog/edit-student-dialog.component';

const routes: Routes = [
  // Check this ref https://angular.io/guide/lazy-loading-ngmodules
  { path: 'course', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path: 'student', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  { path: 'user/edit/:id',component:EditStudentDialogComponent },
  { path: 'course/edit/:id',component:EditCourseDialogComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
