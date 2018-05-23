import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Observable';
@Injectable()
export class MovieService {

  key = 'api_key=81b9f73460ca6ea4ee1166f130832416'
  baseUrl = 'https://api.themoviedb.org/3/search/movie?'

  constructor(private http:HttpClient) { }

  getMovies(movie){
    return this.http.get(`${this.baseUrl}${this.key}&query=${movie}`)
  }
}
