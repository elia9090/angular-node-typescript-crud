import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackComponent } from './callback.component';
import { CallbackRoutingModule } from './callback.routing';

@NgModule({
  imports: [
    CommonModule,
    CallbackRoutingModule
  ],
  declarations: [CallbackComponent]
})
export class CallbackModule { }