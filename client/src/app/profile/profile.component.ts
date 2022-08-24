import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

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
      github: 'https://github.com/manishrw/',
      email: 'mailto:manishsvnit007@gmail.com',
      instagram: 'https://instagram.com/manishrw',
      strava: 'https://www.strava.com/athletes/28884928'
    };
    this.userData = {
      name: 'Manish Wadhwani',
      title: 'Software Engineer',
      address: {
        street: 'Bangalore',
        state: 'KA, India'
      },
      description: 'I\'m an India-based software developer who specializes in large-scale distributed systems for the web.\n' +
        // tslint:disable-next-line:max-line-length
      'I\'m a senior software engineer at <a style=\'color: darkturquoise;\' href="https://www.microsoft.com/en-in/msidc/">Microsoft IDC</a> - Azure SDN team.'
    };
    this.awards = [
      'Star performer for the year award, Q3 2020',
      'TOP 6 in IBM Global Entrepreneur program, 2015',
      'IBM Deep Skill Award for Q4, 2014',
      'Runner up in IBM Techathon, 2013',
      'Published a paper titled \'A Survey of the Privacy Homomorphism in Wireless Sensor Networks\', 2013',
      'Winners of ACM Quest programming, MindBend, 2013 ',
      'AIR 63 in ACM ICPC regionals finals, 2012',
      'AIR 10 in Ethical Hacking contest InCTF, 2012'
    ];

    // tslint:disable-next-line:max-line-length
    this.aboutUs = '<p>I am a senior software engineer with 9+ years of experience in Distributed Systems, Web Applications, and Machine Learning. Although, a programming polyglot, I specialize in  Java, Python, Node.JS and is proficient in Databases and Cloud technologies. I graduated with Master\'s in Computer Science from <a href="https://omscs.gatech.edu/" style="color: darkcyan">Georgia Tech</a> with specialization in Computing Systems. I completed my B.Tech from <a href="https://www.svnit.ac.in/" style="color: darkcyan">National Institute of Technology, Surat</a> in Computer Engineering. <br><br>I like to spend my free time playing badminton, binge-watching TV series. I am always up for running, cycling, and trekking. Follow me on <a style="color: darkcyan" href="https://www.strava.com/athletes/28884928"> Strava </a>. </p>';

    this.workInfo = [{
      year: 'Aug 2021 - Present',
      company: 'Microsoft IDC - Azure SDN',
      role: 'Senior Software Engineer',
      // tslint:disable-next-line:max-line-length
      description: '<p>I\'m part of Azure Networking - SDN team, enabling customers to realize and control the network they desire for their workload in the Cloud.<br><br><b>Technologies used:</b> C#, Azure Cosmos DB, Azure Service fabric, Node.js</p>'
    }, {
      year: 'Nov 2018 - Jul 2021',
      company: 'EY Product Engineering',
      role: 'Senior Software Engineer',
      // tslint:disable-next-line:max-line-length
      description: '<p><b>Access-mgt service:</b> Designed and developed centralized access-mgt service which supports all the features of XACML 3.0 and modeled upon ABAC.<br><br><b>Generic Notification service: </b> Designed and developed the service to be reliable, scalable and multi-tenant platform to send various types of notifications to the clients.</p><br><b>Technologies used:</b> Java, Spring Boot, Cassandra, MySQL, Kubernetes, Docker, NodeJS, RabbitMQ, Redis'
    }, {
      year: 'July 2016 - Nov 2018 ',
      company: ' Microsoft IDC ',
      role: ' Software Engineer 2',
      // tslint:disable-next-line:max-line-length
      description: '<p><b>Bing Instant Answer:</b> Designed and developed the pipeline to auto extract and rank Answers for queries using machine learning for a segment in Bing. It helped the coverage to gain by ~90% for automated answers.<br><br><b>Help Carousel:</b> ​ Designed and developed the system to generate and auto refresh the help topics in Carousel. The project also required clustering techniques to group similar answers into the same buckets.<br><br><b>Broken Links detection:</b> ​ Developed a system to catch broken links for the shipped experience. This helped to decrease the negative experience caused by stale links.</p><br><b>Technologies used:</b> C#, Cosmos BigData, Python, Azure ML, Scope'
    }, {
      year: 'April 2015 - June 2016 ',
      company: ' Medibox Technologies',
      role: ' Software Developer',
      // tslint:disable-next-line:max-line-length
      description: '<p>Medibox is a scalable digital platform for the healthcare industry. Developed the blog and newsroom  module for the platform.<br><br>Developed the business intelligence framework using Node.JS, Mongo DB, and ELK stack. Created a dashboard to track product performance metrics across campaigns.<br><br>Optimized search algorithms across the system using Elastic search. Implemented data mapping using fuzzy logic. Develop a web interface for data enrichment with Feedback Intelligence.<br><br><b>Open Source Contribution:</b> Updated Node.JS module “node-ultimate” by integrating elastic search as a default setup for searching purposes.\n</p><p><b>Technologies used:</b> Mongo DB, Node.JS, AngularJS, ElasticSearch, Nginx, ELK stack.'
    }, {
      year: 'June 2013 - April 2015 ',
      company: ' IBM India Pvt. Ltd.',
      role: ' Software Developer',
      // tslint:disable-next-line:max-line-length
      description: '<p>Developed and maintained business reports for a shipping giant. The reports helped customer gain better insights for demurrage & detention charges, vessel tracking, job booking and vessel filling optimisation. Developed a tool which automates account reset and creation process for client users with Python and Unix.</p><p><b>Technologies used:</b> Python, Unix shell scripting, SQL, COGNOS, Qlikview.'
    }, {
      year: 'July 2011 - May 2012 ',
      company: ' ACM chapters, NIT, Surat ',
      role: ' Executive Committee Member',
      // tslint:disable-next-line:max-line-length
      description: '<p>Organized and Conducted various seminars, competitions, hackathons and training sessions. Collaborated with fellow ACM mates to participate in competitive programming and develop various applications.</p>'
    }];

    this.education = [{
      title: 'M.S. in  Computer Science',
      univ: ' Georgia Tech, AL, US',
      year: '2018 - 2020',
      // tslint:disable-next-line:max-line-length
      description: '<p>Specialisation in Computing Systems.<br><br><b>Courses:</b> Grad Intro to OS, Intro to High Performance computing, Advanced OS, High Performance Computing Architecture, Graduate Algorithms, Reinforcement learning, Information Security, Machine learning for Trading, AI 4 Robotics, AI - ethics, bias and society.</p>'
    }, {
      title: 'Machine Learning Certification',
      univ: ' Stanford Online course - Coursera',
      year: '2016',
      // tslint:disable-next-line:max-line-length
      description: '<p>Completed training in machine learning course by Andrew NG from Stanford University and earned a certificate. The course provided a broad introduction to machine learning, data mining, and statistical pattern recognition.</p>'
    }, {
      title: 'B.Tech in Computer Engineering',
      univ: ' NIT, Surat, GJ, India ',
      year: '2009 - 2013',
      // tslint:disable-next-line:max-line-length
      description: '<p><b>Courses:</b> Data Structures, Algorithm analysis and design, Theoretical Computer Science, Operating Systems, Systems software, Microprocessors & Interfacing Techniques, Information systems, Network & system security, Security in Embedded systems, Distributed systems, Engineering Mathematics, and Artificial Intelligence.</p><p> Project on Evaluation of Privacy Homomorphic algorithms in Wireless Sensor Networks. Published a paper in IJCA for the same. Presented a seminar on Secure boot</p>'
    }, {
      title: 'Java professional course',
      univ: ' Aptech Edu. Ltd. ',
      year: '2009',
      // tslint:disable-next-line:max-line-length
      description: '<p>Completed the course of JAVA Core developer from Aptech in 2009. The course provided an understanding of core OOPS principle, advanced data structures and principles of software design.</p>'
    }];

    this.skills = [{
      title: 'Languages - Java, C, C#',
      value: '90%'
    }, {
      title: 'Scripting - Node.JS, Python, Bash',
      value: '80%'
    }, {
      title: 'Distributed systems',
      value: '75%'
    }, {
      title: 'NoSQL - Mongo DB, Redis, Neo4J, Cassandra ',
      value: '80%'
    }, {
      title: 'Algorithms & Data structures',
      value: '90%'
    }, {
      title: 'Machine Learning ',
      value: '50%'
    }, {
      title: 'System design ',
      value: '80%'
    }, {
      title: 'DB SQl - MySQL, Postgres',
      value: '75%'
    }];
  }

}
