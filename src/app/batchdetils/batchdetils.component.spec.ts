import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchdetilsComponent } from './batchdetils.component';

describe('BatchdetilsComponent', () => {
  let component: BatchdetilsComponent;
  let fixture: ComponentFixture<BatchdetilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchdetilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchdetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
