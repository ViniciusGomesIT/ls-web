import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
    constructor(private httpClient: HttpClient) { }

    getAllBooksByGenre(): Observable<any> {
        return this.httpClient.get('http://localhost:8088/api/book/genre/' + 'terror')
    }
}
