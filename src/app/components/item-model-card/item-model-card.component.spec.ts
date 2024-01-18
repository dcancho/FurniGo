import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemModelCardComponent } from './item-model-card.component';

describe('ItemModelCardComponent', () => {
  let component: ItemModelCardComponent;
  let fixture: ComponentFixture<ItemModelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemModelCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemModelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
