import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPsComponent } from './header-ps.component';

describe('HeaderPsComponent', () => {
  let component: HeaderPsComponent;
  let fixture: ComponentFixture<HeaderPsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
