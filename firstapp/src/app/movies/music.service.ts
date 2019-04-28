import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class MusicService {

    private url = 'https://ngmusicdb.herokuapp.com/api/getMusic';
    constructor(private http: HttpClient) {}

    getArtist(): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}`);
    }
}

