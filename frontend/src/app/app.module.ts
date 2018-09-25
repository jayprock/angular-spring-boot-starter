import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { VersionInfoComponent } from './version-info/version-info.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
