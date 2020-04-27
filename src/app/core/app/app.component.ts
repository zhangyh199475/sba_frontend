import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements Oninit{
  constructor(private router: Router){}
  isFlight: boolean;
  isDelayCode: boolean;
  isDepartment: boolean;
  isMvtAddress: boolean;
  isSendTelex: boolean;
  isTransLog: boolean;
  isOutgoingTelex: boolean;
  isUser: boolean;
  sendTelexControl: boolean;

  ngOnInit() {
    this.sendTelexControl = false;
  }

  onClickNavBarLink() {
    setTimeout(() => {
      this.highlightActiveLink(this.router.url);
    }, 50);
  }

  highlightActiveLink(routePath: string) {
    this.isFlight = true;
    this.isDelayCode = false;
    this.isDepartment = false;
    this.isMvtAddress = false;
    this.isOutgoingTelex = false;
    this.isSendTelex = false;
    this.isUser = false;
    this.isTransLog = false;
    if (routePath.startsWith("/home/flight-list")) {
      this.isFlight = true;
    } else if (routePath.startsWith("/home/delay-codes")) {
      this.isDelayCode = true;
      this.isFlight = false;
    } else if (routePath.startsWith("/home/department")) {
      this.isDepartment = true;
      this.isFlight = false;
    } else if (routePath.startsWith("/home/outgoing-telex")) {
      this.isOutgoingTelex = true;
      this.isFlight = false;
    } else if (routePath.startsWith("/home/user")) {
      this.isUser = true;
      this.isFlight = false;
    } else if (routePath.startsWith("/home/transaction-log")) {
      this.isTransLog = true;
      this.isFlight = false;
    } else if (routePath.startsWith("/home/send-telex")) {
      this.isSendTelex = true;
      this.isFlight = false;
    } else if (routePath.startsWith("/home/movement-address")) {
      this.isMvtAddress = true;
      this.isFlight = false;
    }
  }
}
