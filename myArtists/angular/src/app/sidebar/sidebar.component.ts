import { Component, OnInit, Output } from '@angular/core';

import { Artist } from '../artist-details/artist';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ArtistService]
})
export class SidebarComponent implements OnInit {

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
