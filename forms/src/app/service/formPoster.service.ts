import { Injectable } from '@angular/core';
import { Employee } from '../models/form.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class FormPosterService {

    private url = 'http://localhost:3100/posytEmployee';

    constructor(private http: HttpClient ) {}

    postEmployee(employee: Employee) {
        console.log('data in service>>>', employee );
        return this.http.post(this.url, employee);
    }
}
