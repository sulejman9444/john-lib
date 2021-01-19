import { TestBed } from '@angular/core/testing';

import { MehagaPckService } from './mehaga-pck.service';

describe('MehagaPckService', () => {
  let service: MehagaPckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MehagaPckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
