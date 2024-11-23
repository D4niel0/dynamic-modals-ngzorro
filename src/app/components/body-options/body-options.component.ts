import { Component, Input } from '@angular/core';
import { NgZorroFormsModule } from '../../shared/ng-zorro-forms/ng-zorro-forms.module';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body-options',
  standalone: true,
  imports: [NgZorroFormsModule],
  templateUrl: './body-options.component.html',
  styleUrl: './body-options.component.scss',
})
export class BodyOptionsComponent {
  @Input() modalForm: FormGroup = new FormGroup({});
  @Input() options: any = { body: false };

  applyValidators(apply: boolean): void {
    this.modalForm.controls['body']?.reset();
    if (apply) {
      this.modalForm.controls['body']?.addValidators([Validators.required]);
    } else {
      this.modalForm.controls['body']?.clearValidators();
    }

    this.modalForm.controls['body']?.updateValueAndValidity();
  }
}
