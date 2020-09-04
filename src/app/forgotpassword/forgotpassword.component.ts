import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent  {

  public invaliddata = false;


  public fbFormGroup = this.fb.group({
    password:['', Validators.required],
    email:['',Validators.required]

  });

  constructor(private router : Router,private http : HttpClient,private fb : FormBuilder) { }

  gotopage(page)
  {
      this.router.navigate([page]);
  }

    async reseatprocess()
    {

      const data = this.fbFormGroup.value;
    

      const url = 'http://localhost:5700/forgotpassword';
 
      const result: any= await this.http.post(url, data).toPromise();
 
     if (this.fbFormGroup.valid) 
     
     {
       this.router.navigate(['login']);
     } 
     
     else 
     {
       this. invaliddata  = true;
     }
   }
      
  
  }