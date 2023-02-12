import { Component } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor(private SharedService:SharedService) {}

  MovieList:any=[];
 
  ngOnInit(): void{
    this.refreshMovieList();
  }

  refreshMovieList(){
    this.SharedService.getMoviesList().subscribe((data)=>{
      this.MovieList=data;
    });
  }

  upvoteClick(item:any)
  {
    item.MovieUpvotes += 1
    console.log("yes")
    this.SharedService.updateMovie(item).subscribe(res=>{
      this.refreshMovieList()
      });
  }

  downvoteClick(item:any)
  {
    item.MovieDownvotes += 1
    this.SharedService.updateMovie(item).subscribe(res=>{
      this.refreshMovieList()
      });
  }

  sortByName(){
    this.SharedService.getSortedMoviesTitleList().subscribe((data)=>{
      this.MovieList=data;
    });
  }


  sortByDate(){
    console.log('yes');
    this.SharedService.getSortedMoviesDateList().subscribe((data)=>{
      this.MovieList=data;
    });
  }

}
