import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemThreeDViewerComponent } from './item-three-d-viewer.component';

describe('ItemThreeDViewerComponent', () => {
  let component: ItemThreeDViewerComponent;
  let fixture: ComponentFixture<ItemThreeDViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemThreeDViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemThreeDViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
