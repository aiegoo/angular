import { ServerElementComponent } from '../server-element/server-element.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverElement = [];
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    
    this.serverElement.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElement.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
