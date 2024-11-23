import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsOptionsComponent } from './buttons-options.component';

describe('ButtonsOptionsComponent', () => {
  let component: ButtonsOptionsComponent;
  let fixture: ComponentFixture<ButtonsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
