import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeastListComponent } from './beast-list.component';

describe('BeastListComponent', () => {
  let component: BeastListComponent;
  let fixture: ComponentFixture<BeastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeastListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
