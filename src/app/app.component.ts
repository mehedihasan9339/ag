import { Component } from '@angular/core';
import { SheetDescriptor, SpreadsheetMainMenuItem } from '@progress/kendo-angular-spreadsheet';
import { sheets } from './sheets';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public sheets: SheetDescriptor[] = sheets;
    public items: SpreadsheetMainMenuItem[] = [
        { id: 'file', active: true },
        { id: 'home' },
        { id: 'insert' }
    ];
}