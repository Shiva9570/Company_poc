import { TestBed } from '@angular/core/testing';

import { CompanyMaster } from './company-master';

describe('CompanyMaster', () => {
  let service: CompanyMaster;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyMaster);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
