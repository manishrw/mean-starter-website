import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-worktimeline',
  templateUrl: './worktimeline.component.html',
  styleUrls: ['./worktimeline.component.css']
})
export class WorktimelineComponent implements OnInit {
  @Input() workInfo: any;
  @Input() aboutUs: string;

  constructor() {
  }

  ngOnInit() {
    console.log(this.workInfo);
    console.log(this.aboutUs);
  }

}
