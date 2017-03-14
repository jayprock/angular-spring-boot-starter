import { OpaqueToken } from '@angular/core';
import { environment } from './../environments/environment';

export const REST_PATHS = new OpaqueToken("rest paths");

const restPaths = {
    versionInfo: 'about/version'
}

const devServerPrefix = 'http://localhost:8080';
const apiPrefix = "/api/";

export function setRestPaths() {
    let result = {};
    let prefix = (environment.production) ? apiPrefix : devServerPrefix + apiPrefix;
    for (let key in restPaths) {
        result[key] = prefix + restPaths[key];
    }
    return result;
}