import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QdevicesComponent } from './qdevices.component';

describe('QdevicesComponent', () => {
  let component: QdevicesComponent;
  let fixture: ComponentFixture<QdevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QdevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QdevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
