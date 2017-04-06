import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Http, Response } from '@angular/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable'
import { ServiceErrorHandler } from './service-error-handler';
import { VersionInfo } from './version-info/version-info';
import { restPaths } from './rest-paths';

@Injectable()
export class AppService {

  constructor(
      private http: Http, 
      private errorHandler: ServiceErrorHandler
  ) { }

  getVersionInfo() : Observable<VersionInfo> {
    return this.http.get(restPaths.versionInfo)
      .map((response: Response) => response.json())
      .catch(this.errorHandler.handleError);
  }
}
