import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = ""
  constructor(private http: HttpClient) {}

  onSet(endpoint:string) {
    this.url = endpoint
  }

  onGet() {
    this.http.get(this.url).subscribe( data => {
      console.log(data)
    })
  }

}
