import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {

    movies:any[]  //array

    constructor()    //defining array
    {
      this.movies = [
        {
          title:'Bahubali',
          genre:'Action',
          director:'Raja Mouli'
        },
        {
          title:'Hera Pheri',
          genre:'Comedy',
          director:'xyz'
        },
        {
          title:'Us',
          genre:'Drama',
          director:'riamcharam'
        },
        {
          title:'white house down',
          genre:'action',
          director:'xhamjyy'
        },
        {
          title:'Teen wolf',
          genre:'us action',
          director:'jeff bezoz'
        }
      ]
    }

   public getMovies()        //get method
  {
    return this.movies
  }  

}