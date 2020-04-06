import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../data-model/movie";

@Injectable({
  providedIn: "root"
})
export class MovieServices {
  test: string;
  // replace comments with YOUR_API and YOUR_ID
  private apiKey: string = //process.env.API ;      // the three symbol &s= not apiKey
  private apiKeyID: string = //process.env.API ;    // movieDetail
  private urlImbd: string = "http://www.omdbapi.com/?apikey=";

  // http client built-in service with RxJs Observable ho handle async operations
  constructor(private http: HttpClient) { }

  // GET with Observable
  // string to add to query
  getMovies(query: string): Observable<any> {
    return (
      this.http
        // method getMovies() return HttpClient.get() value
        // which is an RxJs Observable i have to subscribe the Observable returned
        // which do the req and proces the res
        .get<Movie[]>(`${this.urlImbd}${this.apiKey}${query}`, {
          observe: "response"
        })
    ); // API consumedr = url + key + query
  }

  getFilmInfo(end: string): Observable<any> {
    return this.http.get<Movie[]>(
      `${this.urlImbd}${this.apiKeyID}${end}${"&plot=full"}`,
      { observe: "response" }
    );
  }
}
