import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropSyncComponent } from './drag-drop-sync.component';

describe('DragDropSyncComponent', () => {
  let component: DragDropSyncComponent;
  let fixture: ComponentFixture<DragDropSyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropSyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
