import {Component} from 'angular2/core';
import {UiTabs, UiPane} from './tabs.component';

@Component({
    selector: 'tab-demo',
    templateUrl:'client/examples/tabs/demo.html',
    directives: [UiTabs, UiPane]
})

export class TabDemoComponent {
  details: Detail[] = [];
  id: number = 0;
  addDetail() {
    this.id++;
    this.details.push({
      title: `Detail ${this.id}`,
      text: `Some detail text for ${this.id}...`
    });
  }
  removeDetail(detail) {
    this.details = this.details.filter((d) => d !== detail);
  }
}

interface Detail{
    title:string;
    text:string;
}