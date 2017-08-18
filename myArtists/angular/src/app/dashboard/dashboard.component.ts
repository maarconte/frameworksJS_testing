import { Component, OnInit } from '@angular/core';


import { Artist } from '../artist-details/artist';
import { ArtistService } from '../service/artist.service';
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  artists:Artist[] = [];
  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistService.getArtists()
    .then(artists => this.artists = artists.slice(1, 5));
  }
}
