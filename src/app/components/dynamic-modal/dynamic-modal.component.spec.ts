import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicModalComponent } from './dynamic-modal.component';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

describe('DynamicModalComponent', () => {
  let component: DynamicModalComponent;
  let fixture: ComponentFixture<DynamicModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicModalComponent],
      providers: [
        {
          provide: NZ_MODAL_DATA,
          useValue: { key: 'value' },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header if options.header is true', () => {
    component.nzModalData = {
      options: { header: true },
      modalContent: { headerText: 'Test Header' },
    };
    fixture.detectChanges();

    const headerElement = fixture.nativeElement.querySelector('.modal-header');
    expect(headerElement).toBeTruthy();
    expect(headerElement.textContent).toContain('Test Header');
  });

  it('should render the body if options.body is true', () => {
    component.nzModalData = {
      options: { body: true },
      modalContent: { body: 'Test Body' },
    };
    fixture.detectChanges();

    const bodyElement = fixture.nativeElement.querySelector('.modal-body');
    expect(bodyElement).toBeTruthy();
    expect(bodyElement.textContent).toContain('Test Body');
  });

  it('should render the button if options.button is true', () => {
    component.nzModalData = {
      options: { button: true },
      modalContent: { buttonText: 'Click Me' },
    };
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toContain('Click Me');
  });
});
