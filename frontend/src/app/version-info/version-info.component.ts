import { Component, OnInit } from '@angular/core';

import { AppService } from './../app.service';
import { VersionInfo } from './version-info'

@Component({
  selector: 'app-version-info',
  templateUrl: './version-info.component.html',
  styleUrls: ['./version-info.component.css']
})
export class VersionInfoComponent implements OnInit {

  private versionInfo: VersionInfo;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getVersionInfo().subscribe( data => {
      console.log(data);
      this.versionInfo = data;
    });
  }

}
