import { Injectable } from '@angular/core';
import { Song } from './song'
import { Artist } from './artist'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ArtistService {

  private artistsUrl = 'http://localhost:3000/artists';  // URL to web api
  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist []>(this.artistsUrl)
  }

  addArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.artistsUrl, artist)
  }

  deleteArtist(artist: Artist): Observable<Artist> {
    let url = 'http://localhost:3000/artists'
    return this.http.delete<Artist>(`${url}/${artist.id}`)
  }

}
