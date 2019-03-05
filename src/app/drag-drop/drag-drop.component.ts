import { Component, OnInit, ViewEncapsulation, ViewChild, ContentChildren, QueryList, forwardRef, ElementRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { TreeViewComponent, NodeKeyPressEventArgs, NodeClickEventArgs } from '@syncfusion/ej2-angular-navigations';


import {DragDropSyncComponent} from '../drag-drop-sync/drag-drop-sync.component';
export interface PeriodicElement {
  name?: any;
  code?: any;
  weight?: number;
  symbol?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {code: 'hy', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {code: 'he', name: 'Helium', weight: 4.0026, symbol: 'He'},
  {code: 'li', name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {code: 'be', name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {code: 'ba', name: 'Boron', weight: 10.811, symbol: 'B'},
  {code: 'ca', name: 'Carbon', weight: 12.0107, symbol: 'C'}
];
@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent{

  @ViewChild('table') table: MatTable<PeriodicElement>;
  @ViewChild('treeview') public tree: TreeViewComponent;
  @ViewChild ('treevalidate') treevalidate: TreeViewComponent;
  @ViewChild(DragDropSyncComponent) TreeViewData;
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  getNodeDetails = '';
  constructor(public elementRef: ElementRef){}
      
  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    const newField = { code: event.item.data.code, name: event.item.data.name };

  if(this.TreeViewData.getNodeDetails){
    if(this.TreeViewData.getNodeDetails.parentID){
      this.TreeViewData.continents.map(v => {
        if(v['code'] ===this.TreeViewData.getNodeDetails.parentID){
          v['countries'].map(c =>{
            if(c.code === this.TreeViewData.getNodeDetails.id){
              v['countries'].push(newField)
            } 
          })
        }
      })
    }else{
      this.TreeViewData.continents.map(v => {
        if(v['code'] === this.TreeViewData.getNodeDetails.id && v['name'] === this.TreeViewData.getNodeDetails.text){
          v['countries'].push(newField)     
        }
      })
    }
    $('.e-node-focus').removeClass('e-active');
    this.TreeViewData.getNodeDetails ='';
  }else{
    alert('Please select node ')
  }
  console.log(this.TreeViewData.continents);
  }

  public allowMultiSelection:boolean = true;
  public allowDragAndDrop:boolean = true;
  public allowDragAndDropAcrossControl:boolean = true;
  public allowDropSibling: boolean = true;
  public allowDropChild: boolean = true;
  public allowEditing: boolean = true;
  public nodeCheck(args: NodeKeyPressEventArgs | NodeClickEventArgs): void {
    console.log(this.getNodeDetails);
    if (this.getNodeDetails) {
      $('.e-node-focus').removeClass('e-active');
      this.getNodeDetails ='';
    } else {
      this.getNodeDetails = this.treevalidate['getNodeData'](args.node);
    }
}

}