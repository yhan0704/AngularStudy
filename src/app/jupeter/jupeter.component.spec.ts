import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JupeterComponent } from './jupeter.component';

describe('JupeterComponent', () => {
  let component: JupeterComponent;
  let fixture: ComponentFixture<JupeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JupeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JupeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
