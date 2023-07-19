/*
    ========================================================================================================================
    ; Title: home.component.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 7/14/23
    ; Description: Capstone
    ; Work Cited:
    Coding Guidelines
    Instructions - Assignment 6.4 - Input Properties
    Instruction - Exercise 7.3 Form Validation
    Course GitHub
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // sets up the form group
  loanData: FormGroup;
  // payment and interest variables set to 0 to avoid null
  payment: number = 0;
  interest: number = 0;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.loanData = this.fb.group({
      //similar to what we did in sign-in-component.ts in our gpa-calculator-app, these variables are from our form. interest and amount can handle decimals, tried with comma doesnt work
      amount: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9.]*$'),
        ]),
      ],
      interest: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9.]*$'),
        ]),
      ],
      years: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
    });
  }
  get form() {
    return this.loanData.controls;
  }

  // this function will calculate our loan
  calcResults() {
    // our formcontrols -- tried to use parseInt but using another loan calculator app from the web it was off by a few dollars for payment, which means the other total was way off
    let formValues = this.loanData.value;
    let amount = parseFloat(formValues.amount);
    let interest = parseFloat(formValues.interest);
    let years = parseFloat(formValues.years);

    //variables for our calculation from the instructions
    // prettier-ignore
    let months = (years * 12);
    // prettier-ignore
    let ratePerPeriod = ((interest / 100) / 12);

    // the calculation from the instruction
    // prettier-ignore
    this.payment =
      (amount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), months))) /
      (Math.pow((1 + ratePerPeriod), months) - 1);
    // prettier-ignore
    this.interest = (this.payment * months) - amount;
  }

  // // this will clear the form
  clearEntries() {
    this.payment = 0;
    this.interest = 0;
    this.loanData.reset();
  }
}
