import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CrudCartService } from './crud-cart.service';

describe('CrudCartService', () => {
  let service: CrudCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CrudCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
