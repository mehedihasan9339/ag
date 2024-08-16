import { Component, NgZone } from '@angular/core';
import { SheetDescriptor, SheetRow, SpreadsheetMainMenuItem } from '@progress/kendo-angular-spreadsheet';
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

    constructor(private zone: NgZone){}

    public AddRow(): void {
      let rows = this.sheets[0].rows ?? [];
        
      let index = rows?.findIndex(r => r.index != null) ?? 1;
      let existingRow = rows[index - 1];
      let newCells = existingRow.cells?.map(cell => ({
        ...cell
      }));

      let newRow = {...existingRow, cells: newCells };
      if (newRow.cells && newRow.cells.length > 0)
        newRow.cells[0].value = 123;
      
      rows.splice(index, 0, newRow);
      
      this.zone.run(() => {
        this.sheets = this.sheets.map(sh => {
          if (sh.rows != null) {
            return ({...sh, rows: [...rows] as SheetRow[]})
          }
          else
            return ({...sh})
        }) as SheetDescriptor[];

        console.log(this.sheets[0].rows?.length);
      });
    }
}