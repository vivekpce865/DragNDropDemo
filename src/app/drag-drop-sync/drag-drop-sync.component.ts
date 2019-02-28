import { Component, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { EJComponents } from 'ej-angular2';
import { TreeView, DragAndDropEventArgs, NodeEditEventArgs } from '@syncfusion/ej2-navigations';
import { ListView } from '@syncfusion/ej2-lists';
import { closest } from '@syncfusion/ej2-base';
import { TreeViewComponent, NodeKeyPressEventArgs, NodeClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { RowDropSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-drag-drop-sync',
  templateUrl: './drag-drop-sync.component.html',
  styleUrls: ['./drag-drop-sync.component.css']
})
export class DragDropSyncComponent implements OnInit {
  @ViewChild('treeview') public tree: TreeViewComponent;
  @ViewChild ('treevalidate') treevalidate: TreeViewComponent;
  getNodeDetails: any
  ngOnInit() {
  }
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
public field:Object = { dataSource: this.continents, id: 'code', text: 'name', child: 'countries' };


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
  if (this.getNodeDetails.isChecked == 'true') {
    this.treevalidate.uncheckAll(checkedNode);
  } else {
    this.treevalidate.checkAll(checkedNode);
    this.getNodeDetails='';
  }
  console.log(checkedNode)
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


