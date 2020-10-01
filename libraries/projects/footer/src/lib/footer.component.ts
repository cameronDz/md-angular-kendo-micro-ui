import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nssd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() sourceCodeHostingSource: string = 'GitHub';
  @Input() sourceCodeRepo: string = '#';

  constructor() {}

  ngOnInit(): void {}

}
