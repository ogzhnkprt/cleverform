import { Directive, ElementRef, Renderer2, HostListener, HostBinding,Input,Output ,EventEmitter } from '@angular/core';
import { ViewChild , ViewChildren, ContentChildren, QueryList } from '@angular/core';   
import { LoginRequest } from '../classes/out/LoginRequest';
import { Message, MessageService } from 'primeng/api';

declare var $: any;
declare var Number: any;


@Directive({
    selector: '[loginFormChecker]'
})
export class LoginFormCheckerDirective {
    activator : Element;
    @Input()  loginRequest : LoginRequest;   
    @Input()  formReady : boolean;
    @Output() formReadyChange = new EventEmitter<boolean>();
    @Input()  errorFields: string[];
    @Output() errorFieldsChange = new EventEmitter<string[]>();

    constructor (private el: ElementRef,
                 private renderer: Renderer2,
                 private messageService: MessageService ) {
    }
    ngOnInit() {    
        this.activator = this.el.nativeElement;             
    }     

    @HostListener('click',['$event,$event.target'])
    @HostListener('keyup',['$event,$event.target'])
    click(e: KeyboardEvent) {                   
        this.formReady=false; 
        this.resetErrorClasses(); 
        this.errorFields=[];
        let errorCount: number=this.checkFields();
        if (errorCount==0) {
            this.formReady=true;       //console.log("directive de  errorCount>>>"+errorCount);
        }    
        this.formReadyChange.emit(this.formReady);    //console.log("directive de  formReady>>>"+this.formReady);
        this.errorFieldsChange.emit(this.errorFields);
        this.errorFields.forEach(e => {
            $("#"+e).addClass("ng-invalid");          //console.log("directive de  element classname>>>"+$("#"+e).attr('class'));
        });     
        this.errorFields.forEach(e => {
            $("#"+e).addClass("bor-solid-thin-red");          //console.log("directive de  element classname>>>"+$("#"+e).attr('class'));
        });            
    }//@HostListener 
    

    private resetErrorClasses(): void{
        this.errorFields.forEach(e => {
            $("#"+e).removeClass("ng-invalid");
        });
        this.errorFields.forEach(e => {
            $("#"+e).removeClass("bor-solid-thin-red");
        });        
    }

    private checkFields(): number{
        let errorCount: number=0;
        if (this.loginRequest){
            errorCount=errorCount+this.checkGender(); 
            errorCount=errorCount+this.checkIdentityNo(); 
            errorCount=errorCount+this.checkCity();                 
        }   
        return errorCount;
    }//checkFields

  
    private checkGender(): number{ 
        let errorCount: number=0;
        let genderExists: boolean = this.loginRequest.gender ? true : false;
        if (!genderExists){
            errorCount++;
            this.errorFields.push("genderTur");                     
        }
        return errorCount;
    }

    private checkIdentityNo(): number{ 
        let errorCount: number=0;
        let identitNoExists: boolean = this.loginRequest.identityNo ? true : false;
        if (!identitNoExists){
            errorCount++;
            this.errorFields.push("identityNo");                     
        }else{
            if (this.loginRequest.identityNo.length!=11){
                let n:number=this.loginRequest.identityNo.length;
                errorCount++;
                this.errorFields.push("identityNo");     
                //this.messageService.add({severity:'info', summary:'Form', detail: (11-n)+' digits reguired for Identity Number'});                  
            }  
        }
        return errorCount;
    }

    private checkCity(): number{ 
        let errorCount: number=0;
        let cityExists: boolean = this.loginRequest.city ? true : false;
        if (!cityExists || this.loginRequest.city.code=="0"){
            errorCount++;
            this.errorFields.push("cityid");                     
        }
        return errorCount;
    }


}//End 