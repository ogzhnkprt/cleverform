import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2, Input} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./shared.component.css'],
    providers: []
})
export class LoadingComponent implements OnInit, AfterViewInit  {

    @Input()  display: boolean;
    //@Output() displayChange = new EventEmitter<boolean>();


    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void{
        //this.displayChange.emit(this.display);  
    }
}//LoadingComponent



