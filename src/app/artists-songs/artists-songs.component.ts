import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { Artist } from '../artist';
import { SongByArtistComponent } from '../song-by-artist/song-by-artist.component';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artists-songs',
  templateUrl: './artists-songs.component.html',
  styleUrls: ['./artists-songs.component.css']
})
export class ArtistsSongsComponent implements OnInit {
  artists: Artist[]
  artistName: ''

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.getArtists()
  }

  getArtists(): void {
    this.artists = this.artistService.getArtists()
      .subscribe(artists => {
        this.artists = artists
      })
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.artistService.addArtist({ name } as Artist)
      .subscribe(artist => {
        this.artists.push(artist);
      });
  }

  deleteArtist(artist: Artist): void {
    this.artists = this.artists.filter(a => artist.id !== a.id);
    this.artistService.deleteArtist(artist).subscribe();
  }

}
