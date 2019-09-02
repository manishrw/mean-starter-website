import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-educationtimeline',
  templateUrl: './educationtimeline.component.html',
  styleUrls: ['./educationtimeline.component.css']
})
export class EducationtimelineComponent implements OnInit {
  @Input() education: any;

  constructor() {
  }

  ngOnInit() {
  }

}
