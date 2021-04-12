import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.css']
})
export class RecognitionComponent implements OnInit {
  @Input() awards: any;

  constructor() {
  }

  ngOnInit() {
  }

}
