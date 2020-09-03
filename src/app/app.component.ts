import { Component } from '@angular/core';
import {ReactiveFormsModule,} from '@angular/forms'
import { FormBuilder, Validators } from '@angular/forms';
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lunch';
}
