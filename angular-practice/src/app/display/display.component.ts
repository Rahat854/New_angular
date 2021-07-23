import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent  {
showSecret = false
  log : any = []
  constructor() { }
  onToggleDetails() {
  this.showSecret = !this.showSecret
   this.log.push(this.log.length + 1)

  }


}
