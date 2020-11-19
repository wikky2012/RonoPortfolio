import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/wikky2012",
    linkedin: "https://www.linkedin.com/in/wycliffe-k-ronoh-a28048107/",
    gmail: "wicliferono@gmail.com",
    instagram : "https://www.instagram.com/ronoh_wycliffe/?hl=en",
    facebook: "https://www.facebook.com/wicliferono/",
    twitter: "https://twitter.com/Ronoh_Wycliffe_"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
