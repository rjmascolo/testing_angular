import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song';

@Component({
  selector: 'app-song-by-artist',
  templateUrl: './song-by-artist.component.html',
  styleUrls: ['./song-by-artist.component.css']
})
export class SongByArtistComponent implements OnInit {
  @Input() songs: Song[];

  constructor() { }

  ngOnInit() {
  }

}
