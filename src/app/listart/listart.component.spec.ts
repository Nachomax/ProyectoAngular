import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListartComponent } from './listart.component';

describe('ListartComponent', () => {
  let component: ListartComponent;
  let fixture: ComponentFixture<ListartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
