import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';

@Component({
    selector: 'app-movies',
    templateUrl: `./music.component.html`
})

export class MusicComponent implements OnInit {
    musicData: any[];

    constructor(private musicService: MusicService) {}

    ngOnInit(): void {
        this.musicService.getArtist()
            .subscribe((data)  => this.musicData = data[0].artists);
    }
}
