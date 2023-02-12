import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = "http://127.0.0.1:8000/";
  constructor(private http:HttpClient) { }

  getActorsList():Observable<any[]>
  {
    return this.http.get<any[]>(this.APIurl + 'actor/');
  }

  getMoviesList():Observable<any[]>
  {
    return this.http.get<any[]>(this.APIurl + 'movie/');
  }

  getSortedMoviesTitleList():Observable<any[]>
  {
    return this.http.get<any[]>(this.APIurl + 'movie/sort/title');
  }

  getSortedMoviesDateList():Observable<any[]>
  {
    return this.http.get<any[]>(this.APIurl + 'movie/sort/date');
  }

  updateMovie(val:any)
  {
    return this.http.put(this.APIurl+'movie/',val)
  }
  
}
