import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealDragDropComponent } from './real-drag-drop.component';

describe('RealDragDropComponent', () => {
  let component: RealDragDropComponent;
  let fixture: ComponentFixture<RealDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealDragDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
