import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-courses-list-view',
  templateUrl: './courses-list-view.component.html',
  styleUrls: ['./courses-list-view.component.css']
})
export class CoursesListViewComponent implements OnInit {

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }
  get courseList() {

    
    return this.contactService.getAllContacts();
  }

}
