import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VersionInfo } from './version-info/version-info';
import { restPaths } from './rest-paths';

@Injectable()
export class AppService {

  constructor(
      private http: HttpClient
  ) { }

  getVersionInfo() : Observable<VersionInfo> {
    return this.http.get<VersionInfo>(restPaths.versionInfo);
  }
  
}
