import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComformAddressComponent } from './comform-address.component';

describe('ComformAddressComponent', () => {
  let component: ComformAddressComponent;
  let fixture: ComponentFixture<ComformAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComformAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComformAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
