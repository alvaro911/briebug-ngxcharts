import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxUIModule } from '@swimlane/ngx-ui';

import { AppComponent } from './app.component';
import { LocalChartsComponent } from './local-charts/local-charts.component';

import { routing } from './ngxd3.routes';

import { MovieService } from './movie.service';
import { D3DomComponent } from './d3-dom/d3-dom.component';
import { MovieChartComponent } from './movie-chart/movie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalChartsComponent,
    D3DomComponent,
    MovieChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxChartsModule,
    NgxUIModule,
    HttpClientModule,
    routing
  ],
  providers: [{
      provide: APP_BASE_HREF,
      useFactory: getBaseLocation
    },
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseLocation() {
    const paths: string[] = location.pathname.split('/').splice(1, 1);
    const basePath: string = (paths && paths[0]) || '';
    return '/' + basePath;
}
