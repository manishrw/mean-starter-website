import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  social: any;
  userData: any;
  awards: any;
  aboutUs: string;
  workInfo: any;
  education: any;
  skills: any;

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
    };
    this.awards = [
      'Runner up in IBM Techathon, 2013',
      'AIR 63 in ACM ICPC regionals finals, 2012',
      'AIR 10 in Ethical Hacking contest InCTF, 2012',
      'TOP 6 in IBM Global Entrepeneur program, 2015',
      'Winners of ACM Quest programming, MindBend, 2013 ',
      'IBM Deep Skill Award for Q4, 2014'
    ];
    this.aboutUs = '<p>I am an enthusiastic software engineer and a philosopher. I like to build new technology and play around. Currently working in Microsoft R&D, Hyderabad as Software Engineer. </p><br><p>I\'ve been associated and involved with computers through out my life. Among other stuff, I like to play sports(primarily badminton and lawn tennis), read books, surf blogs and articles. I personally like to research on various topics especially those pertaining to science, technology and philosophy.</p>';
    this.workInfo = [{
      year: 'July 2016 - Present ',
      company: ' Microsoft R&D India Pvt. Ltd. ',
      role: ' Software Engineer 2',
      description: ''
    }, {
      year: 'April 2015 - June 2016 ',
      company: ' Medibox Technologies LLP ',
      role: ' Software Developer',
      description: '<p>Designed & Developed scalable web application to build digital platform for healthcare industry. Roles also included configuring cloud infrastructure to make application reliable & scalable, to facilitate Demilitarized zone, and proactively enforce security measures.</p><p>Technologies used: Mongo DB, Node.JS, AngularJS, ElasticSearch, Nginx, ELK stack.'
    }, {
      year: 'June 2013 - April 2015 ',
      company: ' IBM India Pvt. Ltd.',
      role: ' Application Developer',
      description: '<p>Developed and maintained business reports for a shipping giant. The reports helped customer gain better insights for demurrage & detention charges, vessel tracking, job booking and vessel filling optimisation. Developed a tool which automates account reset and creation process for client users with PYTHON and UNIX.</p><p>Technologies used: Python, Unix shell scripting, SQL, COGNOS, Qlikview.'
    }, {
      year: 'July 2011 - May 2012 ',
      company: ' ACM chapters, SVNIT ',
      role: ' Executive Committee Member',
      description: '<p>Organized and Conducted various seminars, competitions, hackathons and training sessions. Collaborated with fellow ACM mates to participate in competitive programming and develop various applications.</p>'
    }];
    this.education = [{
      title: 'Machine Learning Certification, 2016',
      univ: ' Stanford Online course - Coursera',
      description: '<p>Completed training in machine learning course by Andrew NG from Stanford University and earned a certificate. The course provided a broad introduction to machine learning, datamining, and statistical pattern recognition.</p>'
    }, {
      title: 'B.Tech in Computer Engineering, 2013',
      univ: ' SVNIT, Surat ',
      description: '<p>Courses: Data Structures, Algorithm analysis and design, Theoretical Computer Science, Operating Systems, Systems software, Microprocessors & Interfacing Techniques, Information systems, Network & system security, Security in Embedded systems, Distributed systems, Engineering Mathmematics, and Artificial Intelligence.</p><p> Project on Evaluation of Privacy Homomorphic algoritms in Wireless Sensor Networks. Published a paper in IJCA for same. Seminar on Secure boot</p>'
    }, {
      title: 'Java professional course, 2009',
      univ: ' Aptech Edu. Ltd. ',
      description: '<p>Completed the course of JAVA Core developer from Aptech in 2009. The course provided an understanding of core OOPS principle, advanced data structures and principles of software design.</p>'
    }];

    this.skills = [{
      title: 'Languanges - C/C++/Java',
      value: '90%'
    }, {
      title: 'Scripting - Node.JS/Python/Shell',
      value: '80%'
    }, {
      title: 'HTML/CSS',
      value: '70%'
    }, {
      title: 'NoSQL - Mongo DB/ Redis ',
      value: '75%'
    }, {
      title: 'Algorithms & Data structures',
      value: '85%'
    }, {
      title: 'Machine Learning ',
      value: '50%'
    }, {
      title: 'Web App development ',
      value: '80%'
    }, {
      title: 'DB SQl - MySQL, Oracle PL/SQL',
      value: '65%'
    }];
  }

}
