import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOptionsComponent } from './body-options.component';

describe('BodyOptionsComponent', () => {
  let component: BodyOptionsComponent;
  let fixture: ComponentFixture<BodyOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
