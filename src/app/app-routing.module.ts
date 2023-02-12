import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActorsComponent } from './actors/actors.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  {path:'',component:MoviesComponent},
  {path:'movies',component:MoviesComponent},
  {path:'actors',component:ActorsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
