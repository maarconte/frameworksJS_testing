import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Artist } from './artist';
import { ArtistService } from '../service/artist.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
})
export class ArtistDetailsComponent implements OnInit{
  @Input() artist: Artist;

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.artistService.getArtist(+params.get('id')))
      .subscribe(artist => this.artist = artist);
  }

  goBack(): void {
    this.location.back();
  }
}
