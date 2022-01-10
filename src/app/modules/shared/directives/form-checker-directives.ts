import {Directive, ElementRef, Renderer2, HostListener, HostBinding,Input,Output ,EventEmitter } from '@angular/core';
import {ViewChild , ViewChildren, ContentChildren, QueryList } from '@angular/core';   
import {NgControl } from '@angular/forms';
//import {Utility} from '../util/utility';


declare var $: any;
declare var Number: any;
 



@Directive({
    selector: '[inputCharSizeChecker]'
})
export class InputCharSizeCheckerDirective {
    activator : Element;
    //utility : Utility;
    @Input() precision : string = null;      

    
    constructor (private ngControl:NgControl,
                 private el: ElementRef,
                 private renderer: Renderer2 ) {
    }
    ngOnInit() {    
        //this.utility = new Utility(); 
        this.activator = this.el.nativeElement;             
    }     
     
    @HostListener('keydown',['$event,$event.target'])
    keydown(e: KeyboardEvent) {  //e: Event , e: KeyboardEvent                  //let x = e.which || e.keyCode;
        let val : string = this.ngControl.value ;         
        let keycode : number = e.which || e.keyCode; //e.code;
        if (this.precision != null){
            if (keycode!=8 && keycode!=9 && keycode!=13 && keycode!=46  ){ 
                let m : number = parseInt(this.precision,10); 
                if (val!=null && val.length >= m){
                    e.preventDefault();
                    return;   
                }    
            }    
        }//if precision         
    }  

}//End InputCharSizeCheckerDirective




@Directive({
    selector: '[inputDigitChecker]'
})
export class InputDigitCheckerDirective {
    activator : Element;
    //utility : Utility;
    @Input() precision : string = null;   
    
    constructor (private ngControl:NgControl,
                 private el: ElementRef,
                 private renderer: Renderer2 ) {
    }
    ngOnInit() {    
        //this.utility = new Utility(); 
        this.activator = this.el.nativeElement;             
    }     
     
    @HostListener('keydown',['$event,$event.target'])
    keydown(e: KeyboardEvent) {  //e: Event , e: KeyboardEvent                  //let x = e.which || e.keyCode;
        let val : string = this.ngControl.value ;         
        let keycode : number = e.which || e.keyCode; //e.code;
        let n : number =parseInt(e.key,10);
   
        if (!Number.isInteger(n)){
            if (keycode!=8 && keycode!=9 && keycode!=13 && keycode!=46  ){      // 8 : backspace , 9 : tab , 13 : enter , 46 : delete
                e.preventDefault();
                return;
            }    
        }
        if (this.precision != null){
            if (keycode!=8 && keycode!=9 && keycode!=13 && keycode!=46  ){ 
                let m : number = parseInt(this.precision,10); 
                if (val!=null && val.length >= m){
                    e.preventDefault();
                    return;   
                }    
            }    
        }//if precision        
    }  
    
}//End inputDigitChecker

@Directive({
    selector: '[inputIntegerChecker]'
})
export class InputIntegerCheckerDirective {
    activator : Element;
    //utility : Utility;
    @Input() precision : string = null;      

    
    constructor (private ngControl:NgControl,
                 private el: ElementRef,
                 private renderer: Renderer2 ) {
    }
    ngOnInit() {    
        //this.utility = new Utility(); 
        this.activator = this.el.nativeElement;             
    }     
     
    @HostListener('keydown',['$event,$event.target'])
    keydown(e: KeyboardEvent) {  //e: Event , e: KeyboardEvent                  //let x = e.which || e.keyCode;
        let val : string = this.ngControl.value ;         
        let keycode : number = e.which || e.keyCode; //e.code;
        let n : number =parseInt(e.key,10);
        
        if (!val || val.length===0){
            if (e.key==="0"){
               e.preventDefault();
               return;
            }               
        }          
        if (!Number.isInteger(n)){
            if (keycode!=8 && keycode!=9 && keycode!=13 && keycode!=46  ){      // 8 : backspace , 9 : tab , 13 : enter , 46 : delete
                e.preventDefault();
                return;
            }    
        }
        if (this.precision != null){
            if (keycode!=8 && keycode!=9 && keycode!=13 && keycode!=46  ){ 
                let m : number = parseInt(this.precision,10); 
                if (val!=null && val.length >= m){
                    e.preventDefault();
                    return;   
                }    
            }    
        }//if precision         
    }  
    
}//End InputIntegerCheckerDirective


@Directive({
    selector: '[inputDecimalChecker]'
})
export class InputDecimalCheckerDirective {
    activator : Element;
    //utility : Utility;
    
    @Input() precision : string = null;
        
    constructor (private ngControl:NgControl,
                 private el: ElementRef,
                 private renderer: Renderer2 ) {
    }
    ngOnInit() {    
        //this.utility = new Utility(); 
        this.activator = this.el.nativeElement;             
    }     
     
    @HostListener('keydown',['$event,$event.target'])
    keydown(e: KeyboardEvent) {  //e: Event , e: KeyboardEvent                  //let x = e.which || e.keyCode;
        let val : string = this.ngControl.value ; 
        let keycode : number = e.which || e.keyCode; //e.code;
        let n : number =parseInt(e.key,10);
        
        if (!val || val.length===0){
            if (e.key==="0"){
               e.preventDefault();
               return;
            }               
        }  
        if (e.key==="."){
            if (!val || val.length===0){
                e.preventDefault();
                return;                
            }  
            if (val && val.indexOf(".")>=0){
                e.preventDefault();
                return;                
            }     
        }
        if (!Number.isInteger(n) && e.key!="."){
            if (keycode!=8 && keycode!=9 && keycode!=13 && keycode!=46  ){      // 8 : backspace , 9 : tab , 13 : enter , 46 : delete
                e.preventDefault();
                return;
            }    
        }
        
        if (this.precision != null){
            if (keycode!=8 && keycode!=9 && keycode!=13 && keycode!=46  ){ 
                let arr: string[] = this.precision.split(",");
                if (arr.length == 2){
                    let arr0 : number = parseInt(arr[0],10); 
                    let arr1 : number = parseInt(arr[1],10); 
                    if (e.key==="."){
                        if (arr0<val.length){
                            e.preventDefault();
                            return;                        
                        }
                    }else{
                        if (val){
                            let i : number =  val.indexOf(".");  
                            if (i>=0){
                                let s : string = val.substr(i+1) ;    
                                let m : number = parseInt(arr[1],10)-1;
                                if (s.length> m ){
                                    e.preventDefault();
                                    return;                                 
                                }
                            }else{
                                //if (val.length>=(arr0+arr1)){
                                if (val.length>=(arr0)){
                                    e.preventDefault();
                                    return;   
                                }                                
                            }
                        }
                    }    
                }
            }    
        }//if precision
    }//keydown  
        
}//End inputDecimalChecker
