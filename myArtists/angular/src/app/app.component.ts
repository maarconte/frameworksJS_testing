import { Component, OnInit } from '@angular/core';

import { Artist } from './artist-details/artist';
import { ArtistService } from './artist.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArtistService]
})
export class AppComponent implements OnInit{
  title = 'Liveloop';
  artists: Artist[];
  selectedArtist: Artist;

  constructor(private artistService: ArtistService) { }

  getArtists(): void {
    this.artistService.getArtistsSlowly().then(artists => this.artists = artists);
  }

  ngOnInit(): void {
    this.getArtists();
  }
 
  onSelect(artist: Artist): void {
    this.selectedArtist = artist;
  }

}
