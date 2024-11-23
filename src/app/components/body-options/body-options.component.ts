import { Component, Input } from '@angular/core';
import { NgZorroFormsModule } from '../../shared/ng-zorro-forms/ng-zorro-forms.module';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-body-options',
  standalone: true,
  imports: [NgZorroFormsModule],
  templateUrl: './body-options.component.html',
  styleUrl: './body-options.component.scss',
})
export class BodyOptionsComponent {
  @Input() modalForm: FormGroup = new FormGroup({});
  @Input() options: any | undefined;
}
