import { Component, Input } from '@angular/core';
import { NgZorroFormsModule } from '../../shared/ng-zorro-forms/ng-zorro-forms.module';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header-options',
  standalone: true,
  imports: [NgZorroFormsModule],
  templateUrl: './header-options.component.html',
  styleUrl: './header-options.component.scss',
})
export class HeaderOptionsComponent {
  @Input() modalForm: FormGroup = new FormGroup({});
  @Input() options: any = { header: false };

  applyValidators(apply: boolean): void {
    this.modalForm.controls['headerText']?.reset();

    if (apply) {
      this.modalForm.controls['headerText']?.addValidators([
        Validators.required,
      ]);
    } else {
      this.modalForm.controls['headerText']?.clearValidators();
    }

    this.modalForm.controls['headerText']?.updateValueAndValidity();
  }
}
