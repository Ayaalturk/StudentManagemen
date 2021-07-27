import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Check this ref https://angular.io/guide/lazy-loading-ngmodules
  { path: 'course', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path: 'student', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
