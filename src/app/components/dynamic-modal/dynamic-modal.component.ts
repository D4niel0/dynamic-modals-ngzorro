import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@Component({
  selector: 'app-dynamic-modal',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzPopconfirmModule],
  templateUrl: './dynamic-modal.component.html',
  styleUrl: './dynamic-modal.component.scss',
})
export class DynamicModalComponent {
  readonly nzModalData = inject(NZ_MODAL_DATA);
}
