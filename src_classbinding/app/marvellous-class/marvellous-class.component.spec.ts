import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousClassComponent } from './marvellous-class.component';

describe('MarvellousClassComponent', () => {
  let component: MarvellousClassComponent;
  let fixture: ComponentFixture<MarvellousClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvellousClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvellousClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
