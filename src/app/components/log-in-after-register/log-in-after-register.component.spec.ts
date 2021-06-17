import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInAfterRegisterComponent } from './log-in-after-register.component';

describe('LogInAfterRegisterComponent', () => {
  let component: LogInAfterRegisterComponent;
  let fixture: ComponentFixture<LogInAfterRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInAfterRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInAfterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
