import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(public httpClient: HttpClient,) { }

  getusers(url:string){
    return this.httpClient.get(url)
    .pipe(
    map(res => res) 
    );
    }
    
    public update(url:any , data:any) {
      return this.httpClient
      .put(url , data )
      .pipe(
      map((response) => {
      return response;
      })
      );
      }
}
