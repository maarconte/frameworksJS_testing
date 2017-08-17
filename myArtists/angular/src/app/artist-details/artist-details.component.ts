import { Component, Input} from '@angular/core';

import { Artist } from './artist';
@Component({
  selector: 'artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent {
  @Input() artist: Artist;
}
