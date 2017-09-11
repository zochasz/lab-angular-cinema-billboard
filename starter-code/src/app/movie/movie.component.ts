import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from './../shared/models/movie.model';
import { CinemaService } from './../shared/services/cinema.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  movieId: Number;

  constructor(
    private route: ActivatedRoute,
    private cinemaService: CinemaService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieId = Number(params['id']);
      this.movie = this.cinemaService.getMovie(Number(params['id']));
    });
  }
}
