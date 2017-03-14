import { REST_PATHS, setRestPaths } from './rest-paths';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ServiceErrorHandler } from './service-error-handler';
import { VersionInfoComponent } from './version-info/version-info.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: REST_PATHS, useFactory: setRestPaths },
    AppService,
    ServiceErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
