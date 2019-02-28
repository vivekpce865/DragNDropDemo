import { Component, OnInit, ViewEncapsulation, ViewChild, ContentChildren, QueryList, forwardRef } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { EJComponents } from 'ej-angular2';
import { TreeView, DragAndDropEventArgs, NodeEditEventArgs } from '@syncfusion/ej2-navigations';
import { ListView } from '@syncfusion/ej2-lists';
import { closest } from '@syncfusion/ej2-base';
import { TreeViewComponent, NodeKeyPressEventArgs, NodeClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { RowDropSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

import {DragDropSyncComponent} from '../drag-drop-sync/drag-drop-sync.component';
export interface PeriodicElement {
  name: string;
  code: string;
  weight: number;
  symbol: string;
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
  public draggedName: string;
      // Drop the dragged TreeView node into ListView
      @ViewChild('droppable')element: any;
      @ViewChild('draggable')element1: any;

      getNodeDetails: any
      // public id:number=1;
      // public onDragStop(args: any): void {
      //     let targetEle: any = closest(args.target, '.e-droppable');
      //     targetEle = targetEle ? targetEle : args.target;
      //     debugger
      //     // Check the target as ListView or not
      //     debugger
      //     if (targetEle && targetEle.classList.contains('custom-list')) {
      //        args.cancel = true;
      //         let newData: { [key: string]: Object }[] = [];
      //         if (args.draggedNode.classList.contains('e-active')) {
      //             var dragNode: any = closest(args.draggedNode, '.e-treeview');
      //             var selNodes = dragNode.ej2_instances[0].selectedNodes;
      //             for (let i: number = 0, len: number = selNodes.length; i < len; i++) {
      //                 let nodeEle: Element = document.querySelector('[data-uid="' + selNodes[i] + '"]').querySelector('.e-list-text');
      //                 let nodeText: string = nodeEle.textContent;
      //                 let newNode: { [key: string]: Object } = { id: 'l' + this.id, text: nodeText, class: 'custom-delete', iconId: 'i' + this.id };
      //                 this.id++;
      //                 newData.push(newNode);
      //             }
      //         } else {
      //             let text: string = 'text';
      //             let nodeText: string = args.draggedNodeData[text] as string;
      //             let newNode: { [key: string]: Object } = { id: 'l' + this.id, text: nodeText, class: 'custom-delete', iconId: 'i' + this.id };
      //             this.id++;
      //             newData.push(newNode);
      //         }
      //         // Add collection of node to ListView
      //         //  var listObj =this.list ;
      //         //  listObj.addItem(newData, undefined);
      //     }
      // } 
      
  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
    this.TreeViewData;
    console.log(this.getNodeDetails);
debugger
    const newField = { code: event.item.data.code, name: event.item.data.name };

  //   const newField1 = {code: this.TreeViewData.getNodeDetails.id, name: this.TreeViewData.getNodeDetails.text, countries: [
  //     { code: event.item.data.code, name: event.item.data.name }
  // ]}
  if(this.TreeViewData.getNodeDetails){
    if(this.TreeViewData.getNodeDetails.parentID){
      this.continents.map(v => {
        if(v.code ===this.TreeViewData.getNodeDetails.parentID){
          v.countries.map(c =>{
            if(c.code === this.TreeViewData.getNodeDetails.id){
              v.countries.push(newField)
            } 
          })
        }
      })
    }else{
      this.continents.map(v => {
        if(v.code === this.TreeViewData.getNodeDetails.id && v.name === this.TreeViewData.getNodeDetails.text){
          v.countries.push(newField)
        }
      })
    }
  
  }
  else{
    if(this.getNodeDetails.parentID){
      this.continents.map(v => {
        if(v.code ===this.getNodeDetails.parentID){
          v.countries.map(c =>{
            if(c.code === this.getNodeDetails.id){
              v.countries.push(newField)
            } 
          })
        }
      })
    }else{
      this.continents.map(v => {
        if(v.code === this.getNodeDetails.id && v.name === this.getNodeDetails.text){
          v.countries.push(newField)
        }
      })
    }
  }
  
  
  

    // console.log("\n prevIndex : "+prevIndex);
    // console.log("\n event.currentIndex : "+event.currentIndex);
    // this.draggedName = this.dataSource[event.currentIndex].name;
    // console.log("\n Name: "+this.draggedName);
    // if(this.getNodeDetails.id){
    //   let text: string = 'text';
    //   let nodeText: string = args.draggedNodeData[text] as string;
    //   let newNode: { [key: string]: Object } = { id: 'l' + this.id, text: nodeText, class: 'custom-delete', iconId: 'i' + this.id };
    //   this.id++;
    //   newData.push(newNode);
    // }
    //this.continents.push(newField);
    console.log(this.continents);
  }

    // public destGridData: Object[];
    // public rowDropOptions: RowDropSettingsModel;
    // public destRowDropOptions: RowDropSettingsModel;
    // public selectionOptions: SelectionSettingsModel;
    // public data: Object[];
    // ngOnInit(): void {
    //   this.data = [
    //     { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    //     { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    //     { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

    //     this.data = this.data.slice(0, 5);
    //     this.destGridData = [];
    //     this.rowDropOptions = { targetID: 'DestGrid' };
    //     this.destRowDropOptions = { targetID: 'Grid' };
    //     this.selectionOptions = { type: 'Multiple' };
    // }
    public continents:Object[] = [
        {
        code: 'AF', name: 'Africa', countries: [
            { code: 'NGA', name: 'Nigeria' },
            { code: 'EGY', name: 'Egypt' },
            { code: 'ZAF', name: 'South Africa' }
        ]
    },
    {
        code: 'AS', name: 'Asia', expanded: true, countries: [
            { code: 'CHN', name: 'China' },
            { code: 'IND', name: 'India'},
            { code: 'JPN', name: 'Japan' }
        ]
    },
    {
        code: 'EU', name: 'Europe', countries: [
            { code: 'DNK', name: 'Denmark' },
            { code: 'FIN', name: 'Finland' },
            { code: 'AUT', name: 'Austria' }
        ]
    },
    {
        code: 'NA', name: 'North America', countries: [
            { code: 'USA', name: 'United States of America' },
            { code: 'CUB', name: 'Cuba' },
            { code: 'MEX', name: 'Mexico' }
        ]
    },
    {
        code: 'SA', name: 'South America', countries: [
            { code: 'BRA', name: 'Brazil' },
            { code: 'COL', name: 'Colombia' },
            { code: 'ARG', name: 'Argentina' }
        ]
    },
    {
        code: 'OC', name: 'Oceania', countries: [
            { code: 'AUS', name: 'Australia' },
            { code: 'NZL', name: 'New Zealand' },
            { code: 'WSM', name: 'Samoa' }
        ]
    },
    {
        code: 'AN', name: 'Antarctica', countries: [
            { code: 'BVT', name: 'Bouvet Island' },
            { code: 'ATF', name: 'French Southern Lands' }
        ]
    }
    ];
    // rootNodeIds: Array<string> = new Array<string>();
    // public nodeDrag(args: DragAndDropEventArgs): void {
    //   if(this.rootNodeIds.includes(args.draggedNodeData.id.toString())){
    //       args.dropIndicator = 'e-no-drop';
    //   }
    //   //if (args.droppedNode.getElementsByClassName('folder').length === 0) 
    // }

  //   public onDragStop(args: any): void {
  //     if(args.dropIndicator == 'e-no-drop' || args.dropIndicator == 'e-drop-out'){
  //         args.cancel = true;
  //         return;
  //     }
  //     var draggedNodeId = args.draggedNodeData.id;
  //     var droppedNodeId = args.droppedNodeData.id;
     
      
  // }
    public field:Object = { dataSource: this.continents, id: 'code', text: 'name', child: 'countries' };
    public field1:Object = { dataSource: this.continents, id: 'code', text: 'name', child: 'countries' };
    // ngOnChanges() {
    //   this.field = { dataSource: this.continents, id: 'code', weight: 'weight', symbol:'symbol', text: 'name', child: 'countries' };
    // }
 // public field:Object ={ dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'child', selected: 'isSelected' };
  public allowMultiSelection:boolean = true;
  public allowDragAndDrop:boolean = true;
  public allowDragAndDropAcrossControl:boolean = true;
  public allowDropSibling: boolean = true;
  public allowDropChild: boolean = true;
  public allowEditing: boolean = true;
  public showCheckBox: boolean = true;
  //set the checknodes to the TreeView
  //public checkedNodes: string[] = ['2','6'];
  public nodeCheck(args: NodeKeyPressEventArgs | NodeClickEventArgs): void {
    let checkedNode: any = [args.node.innerText];
    debugger
    // for (var i = 0; i < this.field.dataSource.length; i++) {
    // if(this.field.dataSource[i].name == checkedNode){
    //   this.field.dataSource[i].countries.push(checkedNode);
    // };
    // }
    this.getNodeDetails='';
    this.getNodeDetails = this.treevalidate.getNodeData(args.node);
    // if (this.getNodeDetails.isChecked == 'true') {
    //   this.treevalidate.uncheckAll(checkedNode);
    // } else {
    //   this.treevalidate.checkAll(checkedNode);
    //   this.getNodeDetails='';
    // }

    // if (args.event.target.classList.contains('e-fullrow') || args.event.key == "Enter") {
    //   this.getNodeDetails = this.treevalidate.getNodeData(args.node);
    //   if (this.getNodeDetails.isChecked == 'true') {
    //     this.treevalidate.uncheckAll(checkedNode);
    //     this.getNodeDetails='';
    //   } else {
    //     this.treevalidate.checkAll(checkedNode);
    //   }
    // }
}
}