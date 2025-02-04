import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { log } from 'console';
import { Movie } from '../movie';
@Component({
  selector: 'app-home',
  imports: [],
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
movies: Movie[] = [];
imgUrl:string='https://image.tmdb.org/t/p/original';
constructor(private posts:PostsService){} //inject


ngOnInit():void{
this.getPosts()
}
getPosts(){
this.posts.getPosts().subscribe({
  next:(res)=>{
    this.movies=res.results;
    console.log(this.movies);
  },
  error:(err)=>{
   console.log(err);
  }
}
)
}
}
