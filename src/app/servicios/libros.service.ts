import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {

   private http = inject(HttpClient);

  obtenerLibros(): Observable<any[]> {  
    return this.http.get<any[]>('https://mock.apidog.com/m1/879682-861157-default/libros');
  }
}
