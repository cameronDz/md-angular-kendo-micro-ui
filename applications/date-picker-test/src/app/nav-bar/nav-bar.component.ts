import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public githubHref: string = 'https://github.com/cameronDz/md-angular-kendo-datepicker';
  public githubTitle: string = 'Visit GitHub Repo';
  public githubSrc: string = 'assets/images/github.png';
  public kendoHref: string = 'https://www.telerik.com/kendo-angular-ui/components/dateinputs/datepicker/';
  public kendoTitle: string = 'Visit Kendo DatePicker Docs';

  constructor() {}

  ngOnInit(): void {}

}
