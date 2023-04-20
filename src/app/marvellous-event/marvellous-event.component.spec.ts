import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousEventComponent } from './marvellous-event.component';

describe('MarvellousEventComponent', () => {
  let component: MarvellousEventComponent;
  let fixture: ComponentFixture<MarvellousEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvellousEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvellousEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
