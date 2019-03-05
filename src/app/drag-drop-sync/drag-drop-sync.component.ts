import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeViewComponent, NodeKeyPressEventArgs, NodeClickEventArgs, NodeSelectEventArgs } from '@syncfusion/ej2-angular-navigations';
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
public nodeCheck(args: NodeKeyPressEventArgs | NodeClickEventArgs): void {
  if (this.getNodeDetails) {
    $('.e-node-focus').removeClass('e-active');
    this.getNodeDetails ='';
    
  } else {
    // this.treevalidate.checkAll(checkedNode);
    this.getNodeDetails = this.treevalidate['getNodeData'](args.node);
  }
  
}
}


