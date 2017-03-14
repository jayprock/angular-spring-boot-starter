import 'rxjs/add/observable/throw';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class ServiceErrorHandler {

    public handleError( error: Response | any) {
        if (error instanceof Response) {
        return Observable.throw("An error occurred servicing your request: " + error.status + " - " + error.statusText);
        } else {
        return Observable.throw(error || "Backend server error.");
        }            
    }
}