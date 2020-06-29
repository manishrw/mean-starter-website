import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  social: any;

  constructor() {
  }

  ngOnInit() {
    this.social = {
      linkedin: 'https://www.linkedin.com/in/manishrw',
      twitter: 'https://twitter.com/manishrw',
      skype: 'skype:manishsvnit007',
      github: 'https://github.com/manishrw/',
      email: 'mailto:manishsvnit007@gmail.com'
    };
  }

}
