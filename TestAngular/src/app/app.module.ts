import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchmovieComponent } from './watchmovie/watchmovie.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
// import { MovieDetailsComponentComponent } from './movie-details-component/movie-details-component.component';


@NgModule({  //meta data provide for component
  declarations: [
    AppComponent,
    WatchmovieComponent,
    MovieDetailsComponent,
    // MovieDetailsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
