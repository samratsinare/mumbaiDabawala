import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup} from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    password: ['',Validators.required],
    address: ['', Validators.required]
  });

  constructor(private router : Router, private fb: FormBuilder,private http: HttpClient) { }

 gotopage(page)
 {
     this.router.navigate([page]);
 }

   async signup()
   {
    const data = this.fbFormGroup.value;

    const url = 'http://localhost:5700/adduser';

    const result = await this.http.post(url,data).toPromise();

     console.log(data);
  
       this.router.navigate([''])
     
   }

}
