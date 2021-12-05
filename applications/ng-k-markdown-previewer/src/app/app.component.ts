import { Component } from '@angular/core';

@Component({
    selector: 'nssd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public points: Array<string> = [];
    public subtitle: string = 'Example of using Kenod input fields and ngx-markdown package.';
    public title: string = 'Markdown Input Previewer - ';

}
