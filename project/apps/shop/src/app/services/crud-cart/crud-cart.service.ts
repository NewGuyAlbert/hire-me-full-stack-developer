import { Injectable } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudCartService extends CrudService{

  private endpoint = "/api/cart"
  constructor(http: HttpClient) {
    super(http);
    super.onSet(this.endpoint)
  }

}
