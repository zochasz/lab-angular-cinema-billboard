import { Component, OnInit } from '@angular/core';

import { Movie } from './../shared/models/movie.model';
import { CinemaService } from './../shared/services/cinema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Array<Movie>;
  // movieId: string;
  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
    this.movies = this.cinemaService.getMovies();
  }

  goToMovieDetail(id: number):void {
    // this.cinemaService.getMovie(id);
    // this.movieId = "/movie/" + this.cinemaService.movieId;
  }
}
