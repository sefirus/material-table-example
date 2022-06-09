import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';   //Specially for filtering
import { MatInputModule } from '@angular/material/input'             //Specially for filtering
import { MatSortModule } from '@angular/material/sort';              //Specially for sorting
import { MatButtonModule } from '@angular/material/button';          //Specially for buttons
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { TablePageComponent } from './components/table-page/table-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TablePageComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
