import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
   
    {
      heading: "Software Development,Fullstack",
      duration: "2020",
      subtitle: "Moringa School",
      content: "Successfully completed software development majored in Python for backend and Angular framework for front end",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Bachelor of Computer Science",
      duration: "2019",
      subtitle: "Meru University of Science and Technology",
      content: "Successfully completed my undergraduate degree and attained 2nd class honours upper division",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary School",
      duration: "2013",
      subtitle: "Ngariet Secondary School",
      content: "Successfully completed my high school studies in 2013 and attained B+",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
