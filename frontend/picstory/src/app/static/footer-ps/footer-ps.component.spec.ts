import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPsComponent } from './footer-ps.component';

describe('FooterPsComponent', () => {
  let component: FooterPsComponent;
  let fixture: ComponentFixture<FooterPsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
