import { Injectable } from '@angular/core';
import { CrudService } from '../crud/crud.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudProductService extends CrudService{

  private endpoint = "/api/products"
  constructor(http: HttpClient) {
    super(http);
    super.onSet(this.endpoint)
  }

}
