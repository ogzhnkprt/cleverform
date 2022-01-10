import { Component, Injector, Renderer2 } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

// ngOnInit inherit etmiyor
import { Caution } from '../classes/models/caution';


@Component({
    selector: 'app-module1-base',
    template: `
        <div>
            base works!!
        </div>
    ` 
})
export abstract class BaseComponent  {
    protected renderer: Renderer2;
    protected cautions: Caution[];



    constructor(injector: Injector) { 
    }


    protected getErrorCount(): number{
        let count: number=0;
        if (this.cautions){
            count=this.cautions.filter(c => (c.severity=="error" || c.severity=="ex")).length;
        }
        return count;
    }

    protected getErrorCautions(): Caution[]{
        if (!this.cautions){
            return [];
        }else{
            return this.cautions.filter(c => (c.severity=="error" || c.severity=="ex"));
        }     
    }  

    protected getInfoCautions(): Caution[]{
        if (!this.cautions){
            return [];
        }else{
            return this.cautions.filter(c => (c.severity=="info"));
        }     
    }  

    protected getWarningCautions(): Caution[]{
        if (!this.cautions){
            return [];
        }else{
            return this.cautions.filter(c => (c.severity=="warning"));
        }     
    }  

    protected showErrorCautions(messageService: MessageService, life?: number): void{
        let cautions: Caution[]=this.getErrorCautions();
        let cautionLife:number = life?life:5000;
        if (cautions){
            cautions.forEach(c=>{
                messageService.add({severity:'error', summary:'HATA', detail:c.exp , life:cautionLife});
            });
        }  
    }  

    protected showInfoCautions(messageService: MessageService, life?: number): void{
        let cautions: Caution[]=this.getInfoCautions();
        let cautionLife:number = life?life:5000;
        if (cautions){
            cautions.forEach(c=>{
                messageService.add({severity:'success', summary:'BAŞARI', detail:c.exp , life:cautionLife});
            });
        }  
    } 
    
    protected showWarningCautions(messageService: MessageService, life?: number): void{
        let cautions: Caution[]=this.getWarningCautions();
        let cautionLife:number = life?life:5000;
        if (cautions){
            cautions.forEach(c=>{
                messageService.add({severity:'warning', summary:'UYARI', detail:c.exp , life:cautionLife});
            });
        }  
    }     

    protected showInfoWarningCautions(messageService: MessageService, life?: number): void{
        let cautions: Caution[]=this.getInfoCautions();
        let cautionLife:number = life?life:5000;
        if (cautions){
            cautions.forEach(c=>{
                messageService.add({severity:'success', summary:'UYARI', detail:c.exp , life:cautionLife});
            });
        }  
    }

} //END.

