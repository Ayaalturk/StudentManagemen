import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/service/students.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.css']
})
export class EditStudentDialogComponent implements OnInit {
  
public title = 'Update User';

updateForm!: FormGroup; 
 submitted:boolean = false;
 user:any;
 errorMessage:any;

  constructor(public formBuilder:FormBuilder,
    public studenesService:StudentsService,
    protected activatedRoute:ActivatedRoute,) {
      this.createForm();
     }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // update case
      if(typeof params['id'] !== "undefined") {
      let id = Number.parseInt(params['id']);
      this.studenesService.getUsers("https://jsonplaceholder.typicode.com/users")
      .subscribe(
      response => {
      this.user = response;
      console.log(this.user);
      },
      error => {
      this.errorMessage = error.data.message;
      }
      );
      }
      });
  }

  public createForm(){
    this.updateForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    });
  }
    
    
    onSubmit(elementValues: any) { 
      let id:number = this.user.id;
      this.submitted = false;
      let url ="https://jsonplaceholder.typicode.com/users"
      let data:any = {
      "name": elementValues.name,
      "address": elementValues.address,
      "phone": elementValues.Phone,
      };
      
      this.studenesService.update(url,data)
      .subscribe(
      result => {
      this.submitted = true;
      this.user = data;
      alert('success : User Updated ');
      },
      error => {
      this.submitted = true;
      this.errorMessage = error;
      }
      );
      }
}
