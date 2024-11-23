import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HeaderOptionsComponent } from '../header-options/header-options.component';
import { BodyOptionsComponent } from '../body-options/body-options.component';
import { ButtonsOptionsComponent } from '../buttons-options/buttons-options.component';

@Component({
  selector: 'app-options-selector',
  standalone: true,
  imports: [
    HeaderOptionsComponent,
    BodyOptionsComponent,
    ButtonsOptionsComponent,
  ],
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
      buttonText: [null],
      confirmText: [null],
    });
  }
}
