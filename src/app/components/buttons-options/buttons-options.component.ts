import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
}
