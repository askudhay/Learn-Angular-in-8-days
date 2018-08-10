import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinceComponent } from './prince.component';

describe('PrinceComponent', () => {
  let component: PrinceComponent;
  let fixture: ComponentFixture<PrinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
