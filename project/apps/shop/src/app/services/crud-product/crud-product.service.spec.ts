import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CrudProductService } from './crud-product.service';

describe('CrudProductService', () => {
  let service: CrudProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CrudProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
