import { Component, OnInit, OnDestroy, AfterViewInit, Injector } from '@angular/core';
import { BaseComponent } from './base.component';
import { LoginRequest } from '../classes/out/LoginRequest';
import { Message, MessageService } from 'primeng/api';
import { Caution } from '../classes/models/caution';
import { Rules } from '../classes/rules/rules';

declare var $: any;

@Component({ 
    selector: 'app-sorgu-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css'],    
    providers: [MessageService]
})
export class LoginComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {
    public loginRequest: LoginRequest;
    public formReady: boolean = false; 
    public errorFields: string[] = []; 
  
  
    constructor(injector: Injector,  private messageService: MessageService) { 
        super(injector);
    }

    ngOnInit(): void{ 
        this.loginRequest = new LoginRequest(); 
    }

    ngAfterViewInit(): void{ 
        this.loginRequest = new LoginRequest(); 
    }
    
    ngOnDestroy(){ }     

    
    login(){                            
        this.cautions=[];     // console.log(JSON.stringify(this.loginRequest));  
    }

}// END of LoginComponent.









