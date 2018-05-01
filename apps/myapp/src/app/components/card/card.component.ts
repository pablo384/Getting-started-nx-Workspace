import {Component, OnInit, AfterContentInit, Input, EventEmitter, Output} from '@angular/core';
import * as hig from '../../../../../../node_modules/highlightjs/highlight.pack.js';
import {destroyView} from "@angular/core/src/view/view";
// import * as $ from 'jquery';
interface TODO {
  title: string,
  description: string,
  complete: boolean,
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card:TODO;
  @Input() index:number;
  @Output() do = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit() {

  }
  doit(index){
    this.do.emit(index);
  }
  deleteit(index){
    this.delete.emit(index);

  }
}
