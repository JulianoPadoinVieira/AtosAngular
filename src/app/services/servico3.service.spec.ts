import { TestBed } from '@angular/core/testing';

import { Servico3Service } from './servico3.service';

describe('Servico3Service', () => {
  let service: Servico3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servico3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
