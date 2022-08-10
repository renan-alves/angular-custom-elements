import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealButtonComponent } from './real-button.component';

describe('RealButtonComponent', () => {
  let component: RealButtonComponent;
  let fixture: ComponentFixture<RealButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
