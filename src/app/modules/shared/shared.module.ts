import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';

import { TableModule } from 'primeng/table';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CaptchaModule } from 'primeng/captcha';


import {LoadingComponent} from './components/loading.component';
import {InputCharSizeCheckerDirective,InputDigitCheckerDirective,InputIntegerCheckerDirective,InputDecimalCheckerDirective} from './directives/form-checker-directives';   

@NgModule({
        imports: [FormsModule, CommonModule, HttpClientModule,
                  DialogModule, ConfirmDialogModule,
                  ToastModule, MessagesModule, MessageModule,
                  MenubarModule,
                  CardModule,
                  TableModule, DataViewModule,
                  CalendarModule,
                  AutoCompleteModule,
                  DropdownModule,InputTextModule, ButtonModule,
                  RadioButtonModule, InputMaskModule, InputNumberModule,
                  CheckboxModule, InputTextareaModule, PasswordModule,
                  CaptchaModule
                ],
        declarations: [LoadingComponent,
                InputCharSizeCheckerDirective,InputDigitCheckerDirective,InputIntegerCheckerDirective,InputDecimalCheckerDirective
                ],
        providers:    [],
        exports: [FormsModule, CommonModule, HttpClientModule,
                  DialogModule, ConfirmDialogModule,
                  ToastModule, MessagesModule, MessageModule,
                  MenubarModule,
                  CardModule,
                  TableModule, DataViewModule,
                  CalendarModule,
                  AutoCompleteModule,
                  DropdownModule,InputTextModule, ButtonModule,
                  RadioButtonModule, InputMaskModule, InputNumberModule,
                  CheckboxModule, InputTextareaModule, PasswordModule,
                  CaptchaModule,
                  LoadingComponent,
                  InputCharSizeCheckerDirective,InputDigitCheckerDirective,InputIntegerCheckerDirective,InputDecimalCheckerDirective
                ]
             
})
export class SharedModule { }
