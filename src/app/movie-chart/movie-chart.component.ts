import { Component } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils';
import { formatLabel } from '@swimlane/ngx-charts/release/common/label.helper';
import 'rxjs/Rx';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-chart',
  templateUrl: './movie-chart.component.html',
  styleUrls: ['./movie-chart.component.css']
})
export class MovieChartComponent {

  constructor(private movieService:MovieService) { }

  movie = ''
  movies = [];
  view = [900, 400];
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  xAxisLabel = 'Movies';
  yAxisLabel = 'Popularity';

  searchMovie(query){
    query.trim().replace(/ /g, '%20');
    this.movieService.getMovies(query).subscribe(
      data => {
        const movieData = {
          name: data.results[0].original_title,
          value: data.results[0].popularity
        }
        this.movies = [...this.movies, movieData]
      },
      err => console.log(err)
    );
    this.movie = '';
    console.log(this.movies);
  }

}
