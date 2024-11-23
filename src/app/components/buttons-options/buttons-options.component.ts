import { Component, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NgZorroFormsModule } from '../../shared/ng-zorro-forms/ng-zorro-forms.module';

@Component({
  selector: 'app-buttons-options',
  standalone: true,
  imports: [NgZorroFormsModule],
  templateUrl: './buttons-options.component.html',
  styleUrl: './buttons-options.component.scss',
})
export class ButtonsOptionsComponent {
  @Input() modalForm: FormGroup = new FormGroup({});
  @Input() options: any | undefined;

  applyValidators(apply: boolean, control: string): void {
    this.modalForm.controls[control]?.reset();

    if (control === 'buttonText') {
      this.modalForm.controls['confirmText']?.reset();
      this.modalForm.controls['confirmText']?.clearValidators();
      this.modalForm.controls['confirmText']?.updateValueAndValidity();
      this.options.buttonConfirm = false;
    }

    if (apply) {
      this.modalForm.controls[control]?.addValidators([Validators.required]);
    } else {
      this.modalForm.controls[control]?.clearValidators();
    }

    this.modalForm.controls[control]?.updateValueAndValidity();
    console.log(this.modalForm);
  }
}
