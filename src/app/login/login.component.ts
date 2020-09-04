import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public uiInvalidCredential = false;


  public fbFormGroup = this.fb.group({
    email:['', Validators.required],
    password: ['', Validators.required],
  });


  constructor(private router : Router,private http : HttpClient,private fb : FormBuilder) { }

  gotopage(page)
  {
     this.router.navigate([page]);
  }

  async loginprocess()
  {
       const data = this.fbFormGroup.value;
    

     const url = 'http://localhost:5700/loginuser';

     const result: any= await this.http.post(url, data).toPromise();

    if (result.opr) 
    
    {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['/home/homeimage']);
    } 
    
    else {
      this.uiInvalidCredential = true;
    }
  }
     

  }
