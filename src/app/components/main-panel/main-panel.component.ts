import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})


export class MainPanelComponent implements OnInit {

  rating: number;
  @Input() selectedPerson: any;
  constructor() {
  }

  ngOnInit() {
  }
}
