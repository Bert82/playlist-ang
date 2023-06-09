import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ToastModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ToastModule
  ]
})
export class SharedUiModule {}
