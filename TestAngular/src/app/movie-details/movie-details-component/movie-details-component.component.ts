// app.component.ts

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface SearchResult {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // ... (unchanged code)

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Function to handle image click and navigate to movie details
  showMovieDetails(movie: SearchResult) {
    this.router.navigate(['/movie', movie.id]);
  }

  // ... (unchanged code)
}
