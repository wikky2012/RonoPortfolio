import { Component, OnInit } from '@angular/core';
import {animate, group, query, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    

    trigger('fadein', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(5000)
      ]),
      transition('* => void', [
        animate(5000, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  greeting= {
    username: "Ronoh K. Wycliffe ",
    title: "Hi all, I'm Ronoh",
    subTitle: "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/1E5M61t8t0vK68Rglnf8x_Iqahp3wKDM5/view?usp=sharing"
  }

  ngOnInit(): void {
  }

}
