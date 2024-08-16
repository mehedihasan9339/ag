import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { SpreadsheetModule } from "@progress/kendo-angular-spreadsheet";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonsModule,
    SpreadsheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
