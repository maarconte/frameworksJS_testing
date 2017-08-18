import { Component, OnInit} from '@angular/core';

import { Artist } from '../artist-details/artist';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'my-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
  providers: [ArtistService]  
})
export class ArtistsComponent {
  title = 'Liveloop';
  artists: Artist[];
  selectedArtist: Artist;

  constructor(public artistService: ArtistService) {}

  getArtists(): void {
    this.artistService.getArtists().then(artists => this.artists = artists);
  }

  ngOnInit(): void {
    this.getArtists();
  }
 
  onSelect(artist: Artist): void {
    this.selectedArtist = artist;
  }
}
