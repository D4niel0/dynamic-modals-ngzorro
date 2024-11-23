import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgZorroFormsModule } from '../../shared/ng-zorro-forms/ng-zorro-forms.module';
import { HeaderOptionsComponent } from '../header-options/header-options.component';

@Component({
  selector: 'app-options-selector',
  standalone: true,
  imports: [HeaderOptionsComponent],
  templateUrl: './options-selector.component.html',
  styleUrl: './options-selector.component.scss',
})
export class OptionsSelectorComponent implements OnInit {
  modalForm: FormGroup = new FormGroup({});
  options: any = {
    header: false,
    body: false,
    button: false,
    buttonConfirm: false,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.modalForm = this.fb.group({
      headerText: [null],
      headerBgColor: [null],
      headerTextColor: [null],
      body: [null],
      closeButton: [null],
      textButton: [null],
      textConfig: [null],
    });
  }
}
