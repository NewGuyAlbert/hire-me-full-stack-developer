import { Injectable } from '@angular/core';
import { CrudService } from '../crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CrudProductService {

  // private endpoint = "/api/product"
  private endpoint = "/api"
  constructor(private service: CrudService) {
    service.onSet(this.endpoint)
  }

  onGet(){
    this.service.onGet()
  }
}
