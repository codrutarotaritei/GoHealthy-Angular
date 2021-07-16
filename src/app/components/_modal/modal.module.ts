import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { Modal2Component } from './modal2/modal2.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ModalComponent, Modal2Component],
    exports: [ModalComponent]
})
export class ModalModule { 

    constructor() {};

ngOnInit(): void {};
}