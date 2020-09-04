import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {

  public empty = false;

  public fbFormGroup = this.fb.group({
    adhar:[' ', [Validators.required,Validators.minLength(12)]]
  });
 


  constructor(private router : Router, private fb: FormBuilder,private http: HttpClient) { }

  gotopage(page)
  {
    this.router.navigate([page]);
  }

    async stopserviceprocess()
    {
      const data = this.fbFormGroup.value;
    

      const url = 'http://localhost:5700/stopservice';
 
      const result: any= await this.http.post(url, data).toPromise();

      if(this.fbFormGroup.valid)   
    {
      this.router.navigate(['/home/service']);
    } 
    
    else {
      this.empty = true;

    }
  }
 
    }

