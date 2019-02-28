import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module/material.module';
import { MatAutoCompleteComponent } from './mat-auto-complete/mat-auto-complete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { EJAngular2Module } from 'ej-angular2';
import { DragDropSyncComponent } from './drag-drop-sync/drag-drop-sync.component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { GridModule, PageService, SelectionService, RowDDService } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent,
    MatAutoCompleteComponent,
    DragDropComponent,
    DragDropSyncComponent
  ],
  imports: [
    BrowserModule,
    EJAngular2Module.forRoot(),
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    TreeViewModule ,
    GridModule
  ],
  providers: [PageService, SelectionService, RowDDService],
  bootstrap: [DragDropComponent]
})
export class AppModule { }
