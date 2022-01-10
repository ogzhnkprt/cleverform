import {Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';


import {Caution} from '../modules/shared/classes/models/caution';

@Injectable()
export class AppTopic {

    constructor() {}

    // Observable string sources
    private logoutSource = new Subject<number>();
    private errorsSource = new Subject<Caution[]>();
    private notificationsSource = new Subject<Caution[]>();
    private ajaxerrorsSource = new Subject<Caution[]>();

    // Observable streams
    logout$: Observable<number> = this.logoutSource.asObservable();
    errors$: Observable<Caution[]> = this.errorsSource.asObservable();
    notifications$: Observable<Caution[]> = this.notificationsSource.asObservable();
    ajaxerrors$: Observable<Caution[]> = this.ajaxerrorsSource.asObservable();

    putLogoutSource(num: number): void {
        this.logoutSource.next(num);
    }


    putErrorsSource(cautions: Caution[]): void {
        this.errorsSource.next(cautions);
    }

    putNotificationsSource(cautions: Caution[]): void {
        this.notificationsSource.next(cautions);
    }

    putAjaxerrorsSource(cautions: Caution[]): void {
        this.ajaxerrorsSource.next(cautions);
    }

}// END.


