import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:'[app-servers]',
  // selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = 'No server is created'
  serverName: any = 'Testserver'
  serverCreated = false
  serverStatus: any
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000)

  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreated = true
    this.serverCreation = 'Server is created ' + this.serverName
  }
  onUpdateServerName(event: any) {
    this.serverName = <HTMLInputElement>event.target.value
  }

}
