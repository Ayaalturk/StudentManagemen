import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesModule } from './courses/courses.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsModule } from './students/students.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // There's no need to import the feature module because they are being used in router
    // CoursesModule,
    // StudentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Check this article to learn more about lazy loading modules
// https://www.freecodecamp.org/news/lazy-loading-in-angular-intro-to-ngmodules/
