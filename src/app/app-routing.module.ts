/*
    ========================================================================================================================
    ; Title: app.routing.module.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 7/14/23
    ; Description: This purpose of this assignment is create new layouts with angular materials and flex layouts
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.3 Layouts
    Instruction - Exercise 7.2 Reactive Forms
    Angular Tutorial video https://www.youtube.com/watch?v=9AsogopS9YM
    Angular Tutorial video https://www.youtube.com/watch?v=OFBL4bKno_s
    Course GitHub
    ========================================================================================================================
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// routes for each app page, even a 404 error page
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
