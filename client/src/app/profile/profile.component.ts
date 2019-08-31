import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  social: any;
  userData: any;

  constructor() {
  }

  ngOnInit() {
    this.social = {
      linkedin: 'https://www.linkedin.com/in/manishrw',
      twitter: 'https://twitter.com/manishrw',
      skype: 'skype:manishsvnit007',
      github: 'https://github.com/manishrw/'
    };
    this.userData = {
      name: 'Manish Wadhwani',
      title: 'Software Engineer',
      mail: 'manishrw@yahoo.com',
      phone: '+91 8884715911',
      dob: '06-12-1991',
      address: {
        street: 'Whitefield, Bangalore',
        state: 'KA'
      },
      blog: {
        url: 'https://manishrw.blogspot.com',
        title: 'Personal blog'
      }
    }
  }

}
