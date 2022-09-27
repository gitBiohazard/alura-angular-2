import { TestBed } from '@angular/core/testing';

import { ExistingUserService } from './existing-user.service';

describe('ExistingUserService', () => {
  let service: ExistingUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExistingUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
