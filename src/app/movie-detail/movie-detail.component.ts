import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieServices } from "../services/movie.service";
import { MovieDetail } from "../data-model/movieDetail";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private MovieServizio: MovieServices,
    private route: ActivatedRoute
  ) { }

  film: MovieDetail[];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.MovieServizio.getFilmInfo(params.get("id")).subscribe(res => {
        this.film = res.body;
      });
    });
  }
}
