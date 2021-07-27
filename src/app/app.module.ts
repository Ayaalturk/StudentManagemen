import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from './service/students.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Check this article to learn more about lazy loading modules
// https://www.freecodecamp.org/news/lazy-loading-in-angular-intro-to-ngmodules/
