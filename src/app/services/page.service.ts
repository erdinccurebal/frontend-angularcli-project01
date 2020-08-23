import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavbarModel } from '../../models/navbar.model';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor(private httpClient: HttpClient) {}

   findAll(): Observable<NavbarModel[]> {
    return this.httpClient.get<NavbarModel[]>(
      'http://localhost:3000/pages/findall'
    );
  }
}
