import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-simple-components',
  template: `
    <p>
      simple-components works!
    </p>
  `,
  styles: [
  ]
})
export class SimpleComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
