import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LocalChartsComponent } from './local-charts/local-charts.component';
import { D3DomComponent } from './d3-dom/d3-dom.component';
import { MovieChartComponent } from './movie-chart/movie-chart.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/d3-dom', pathMatch: 'full' },
  { path: 'd3-dom', component: D3DomComponent },
  { path: 'local-charts', component: LocalChartsComponent },
  { path: 'movie-charts', component: MovieChartComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
