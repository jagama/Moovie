import { Component, OnInit } from "@angular/core";
import { MovieServices } from "../services/movie.service";
import { Movie } from "../data-model/movie";

@Component({
  selector: "app-card-deck",
  templateUrl: "./card-deck.component.html",
  styleUrls: ["./card-deck.component.css"]
})
export class CardDeckComponent implements OnInit {
  movies: Movie[]; //import  Movie[] calss
  tile: string; //tile rapresent my input, final piece of my query

  constructor(private movieServices: MovieServices) { }

  ngOnInit() { }

  tiling() {
    this.movieServices
      .getMovies(this.tile)
      .subscribe(res => (this.movies = res.body.Search));
  }
}
