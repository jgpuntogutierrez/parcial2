import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RecetaDetail } from './receta-detail';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getRecetas(): Observable<RecetaDetail[]> {
    return this.http.get<RecetaDetail[]>(this.apiUrl);
  }

}





