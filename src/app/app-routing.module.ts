import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
    {path: '' , component: CardDeckComponent},
    {path: 'movie/:id' , component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
