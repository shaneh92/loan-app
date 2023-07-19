/*
    ========================================================================================================================
    ; Title: not-found.component.ts
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

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss'],
})
export class InterestComponent implements OnInit {
  @Input() interest: number;
  constructor() {}

  ngOnInit(): void {}
}
