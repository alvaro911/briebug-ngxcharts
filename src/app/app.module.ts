import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF, Location } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxUIModule } from '@swimlane/ngx-ui';

import { AppComponent } from './app.component';
import { ComboChartComponent } from './combo-chart/combo-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ComboChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxChartsModule,
    NgxUIModule
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useFactory: getBaseLocation
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseLocation() {
    const paths: string[] = location.pathname.split('/').splice(1, 1);
    const basePath: string = (paths && paths[0]) || '';
    return '/' + basePath;
}
