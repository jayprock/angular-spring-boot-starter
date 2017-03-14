import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Http, Response } from '@angular/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable'
import { REST_PATHS } from './rest-paths';
import { ServiceErrorHandler } from './service-error-handler';
import { VersionInfo } from './version-info/version-info';

@Injectable()
export class AppService {

  constructor(
      private http: Http, 
      @Inject(REST_PATHS) private restPaths,
      private errorHandler: ServiceErrorHandler
  ) { }

  getVersionInfo() : Observable<VersionInfo> {
    return this.http.get(this.restPaths.versionInfo)
      .map((response: Response) => response.json())
      .catch(this.errorHandler.handleError);
  }
}
