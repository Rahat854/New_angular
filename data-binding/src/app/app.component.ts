import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data-binding';
  serverElements = [{type: 'server', name:'Testserver', content: 'just a test'}]
}
