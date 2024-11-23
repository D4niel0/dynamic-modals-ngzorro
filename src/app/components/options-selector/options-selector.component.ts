import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HeaderOptionsComponent } from '../header-options/header-options.component';
import { BodyOptionsComponent } from '../body-options/body-options.component';
import { ButtonsOptionsComponent } from '../buttons-options/buttons-options.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Options } from '../../core/models';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { DynamicModalComponent } from '../dynamic-modal/dynamic-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-options-selector',
  standalone: true,
  imports: [
    CommonModule,
    HeaderOptionsComponent,
    BodyOptionsComponent,
    ButtonsOptionsComponent,
    NzButtonModule,
    NzModalModule,
  ],
  templateUrl: './options-selector.component.html',
  styleUrl: './options-selector.component.scss',
})
export class OptionsSelectorComponent implements OnInit {
  modalForm: FormGroup = new FormGroup({});
  options: Options = {
    header: false,
    body: false,
    button: false,
    buttonConfirm: false,
  };

  constructor(private fb: FormBuilder, private modalService: NzModalService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.modalForm = this.fb.group({
      headerText: [null],
      body: [null],
      buttonText: [null],
      confirmText: [null],
    });
  }

  createModal(): void {
    this.modalService.create<{}>({
      nzCentered: true,
      nzFooter: null,
      nzClosable: false,
      nzContent: DynamicModalComponent,
      nzStyle: {
        borderRadius: '10px',
        boxShadow: '0px 0px 40px rgba(0,0,0, 0.06)',
      },
      nzData: {
        modalContent: this.modalForm.getRawValue(),
        options: this.options,
      },
      nzMaskStyle: {
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    });
  }
}
