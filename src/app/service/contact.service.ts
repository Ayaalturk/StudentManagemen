import { Injectable } from '@angular/core';
import { courses } from '../courses/courses.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  courseList:courses[] = [];

  constructor(private http:HttpClient) { }


  getAllContacts() {

    return this.courseList;
    
  
  }
  
}
