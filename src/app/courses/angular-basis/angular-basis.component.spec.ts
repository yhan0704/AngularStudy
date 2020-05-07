import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBasisComponent } from './angular-basis.component';

describe('AngularBasisComponent', () => {
  let component: AngularBasisComponent;
  let fixture: ComponentFixture<AngularBasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBasisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
