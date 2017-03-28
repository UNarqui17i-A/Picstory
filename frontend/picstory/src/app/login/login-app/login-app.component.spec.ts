import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAppComponent } from './login-app.component';

describe('LoginAppComponent', () => {
  let component: LoginAppComponent;
  let fixture: ComponentFixture<LoginAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
