/*
    ========================================================================================================================
    ; Title: app.component.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 7/14/23
    ; Description: Capstone
    Coding Guidelines
    Instructions - Exercise 6.3 Layouts
    Angular Tutorial video https://www.youtube.com/watch?v=9AsogopS9YM
    Course GitHub
    ========================================================================================================================
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Welcome to Loan App!';
}
