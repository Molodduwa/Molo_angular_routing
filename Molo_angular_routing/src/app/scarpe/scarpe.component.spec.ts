import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarpeComponent } from './scarpe.component';

describe('ScarpeComponent', () => {
  let component: ScarpeComponent;
  let fixture: ComponentFixture<ScarpeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScarpeComponent]
    });
    fixture = TestBed.createComponent(ScarpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
