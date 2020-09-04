import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private router : Router,private fb : FormBuilder , private http:HttpClient) { }

  logoutprocess()
  {
    sessionStorage.removeItem('sid');

      this.router.navigate(['login']);
  }

  gotopage(page)
  {
    this.router.navigate([page]);
  }
  
}
