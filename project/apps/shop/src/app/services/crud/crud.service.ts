import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = ""
  constructor(private http: HttpClient) {}

  onSet(endpoint:string) {
    this.url = endpoint
  }

  getAll(): Observable<any> {
    return this.http.get(this.url)
  }

  read(id: number): Observable<any> {
    return this.http.get(this.url + "/" + id)
  }

  create(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.url + "/" + id)
  }

}
