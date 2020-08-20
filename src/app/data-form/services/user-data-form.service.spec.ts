import { TestBed } from '@angular/core/testing';

import { UserDataFormService } from './user-data-form.service';

describe('UserDataFormService', () => {
  let service: UserDataFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
