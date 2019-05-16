import {Component, OnInit} from '@angular/core';
import data from '../../assets/csvjson.json';

@Component({
  selector: 'app-beast-list',
  templateUrl: './beast-list.component.html',
  styleUrls: ['./beast-list.component.scss']
})
export class BeastListComponent implements OnInit {

  public beastList;

  constructor() {
  }

  ngOnInit() {
    this.beastList = data;
  }

}
