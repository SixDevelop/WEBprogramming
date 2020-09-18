import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {CardData} from '../app/model/carddata';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



export class AppComponent implements OnInit{
  cardData = new CardData;
  payForm: FormGroup;
  title = 'billing';

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.payForm = this.formBuilder.group({
      name: ["", Validators.required],
      cardnum: ["", Validators.required],
      date: ["", Validators.required],
      securityCode: ["", Validators.required],
    })
  }

  get form(){
    return this.payForm.controls;
  }

  onSubmit(){
    alert('confirm your payment');
    console.log(this.form.name.value);
    if (this.payForm.invalid) {
      return;
    }
    
  }

  
}




