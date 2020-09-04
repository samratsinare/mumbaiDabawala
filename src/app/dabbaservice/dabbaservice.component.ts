import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dabbaservice',
  templateUrl: './dabbaservice.component.html',
  styleUrls: ['./dabbaservice.component.css']
})
export class DabbaserviceComponent {

  public emptydata = false;

    public fbFormGroup = this.fb.group({
      adhar: ['', Validators.required],
      pickup: ['', Validators.required],
      droppoint: ['', Validators.required],
      quantity: ['',Validators.required]
    });
  

  constructor(private router : Router, private fb: FormBuilder,private http: HttpClient) { }

  async getservice()
  {
   const data = this.fbFormGroup.value;

   const url = 'http://localhost:5700/addorder';

   const result :any = await this.http.post(url,data).toPromise();

   if(result.opr)
   {
    this.router.navigate(['/home/services'])
   }
 
   else
   {
       this.emptydata = true;
  
   }
     
    
  }

}
