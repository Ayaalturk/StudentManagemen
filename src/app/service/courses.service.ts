import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }

  getCourses(url:string){
    return this.http.get(url)
    .pipe(
    map(data => data) 
    );
    }
}
