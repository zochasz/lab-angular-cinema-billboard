import { Injectable } from '@angular/core';

import { Movie } from './../models/movie.model';
import { movies as mockMovies } from './../../data/movies.data'

@Injectable()
export class CinemaService {
  private movies: Array<Movie> = mockMovies;

  constructor() { }

  getMovies(): Array<Movie> {
    return this.movies;
  }

  getMovie(id: number): Movie {
    return this.movies.filter((movie) => movie.id === id).pop();
  }

}

// return this.users.filter( (user) => user.id === id ).pop();
