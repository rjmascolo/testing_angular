import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArtistsSongsComponent } from './artists-songs/artists-songs.component';
import { SongFormComponent } from './song-form/song-form.component';
import { SongByArtistComponent } from './song-by-artist/song-by-artist.component';
import { ArtistService } from './artist.service';


@NgModule({
  declarations: [
    AppComponent,
    ArtistsSongsComponent,
    SongFormComponent,
    SongByArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
