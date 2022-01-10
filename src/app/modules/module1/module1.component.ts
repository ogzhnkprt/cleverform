import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2, Injector} from '@angular/core';
import { BaseComponent } from './components/base.component';



@Component({
    selector: 'app-module1-root',
    templateUrl: './module1.component.html',
    providers: []
})
export class Module1Component extends BaseComponent implements OnInit,AfterViewInit {
    @ViewChild('appModule1RouterContainer', {read: ElementRef, static:false}) routerContainerRef: ElementRef;

    constructor(injector: Injector) { super(injector); }

    ngOnInit(): void{         

    }

    ngAfterViewInit(): void{  
        let windowHeight = window.innerHeight;
        let routerContainerHeight = (windowHeight) + 'px';
        this.renderer.setStyle(this.routerContainerRef.nativeElement, 'min-height', routerContainerHeight);
    }
   
}//END.
