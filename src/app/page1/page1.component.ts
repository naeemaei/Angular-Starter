import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']

})
export class Page1Component implements OnInit {
  public myProp: string = '';
  constructor() {
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    for (const prop in changes) {
      var prev = changes[prop].previousValue;
      var curr = changes[prop].currentValue;
      console.table({ propName: prop, old: prev, new: curr });
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
