/*
    ========================================================================================================================
    ; Title: sign-in.service.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 7/3/23
    ; Description: This purpose of this assignment is create a reactive form
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.3 Layouts
    Instruction - Exercise 7.2 Reactive Forms
    Angular Tutorial video https://www.youtube.com/watch?v=OFBL4bKno_s
    Course GitHub
    ========================================================================================================================
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }
  validate(studentId: number) {
    return this.studentIds.some((id) => id === studentId);
  }
}
