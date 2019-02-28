import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatTableModule, MatIconModule} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    DragDropModule
  ],
  exports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    DragDropModule
  ]
})
export class MaterialModule { }
