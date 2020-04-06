import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CardDeckComponent } from "./card-deck/card-deck.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { HeadComponent } from "./head/head.component";

@NgModule({
  declarations: [
    AppComponent,
    CardDeckComponent,
    MovieDetailComponent,
    HeadComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
