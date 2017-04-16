import { TestBed, inject } from '@angular/core/testing';

import { AWSService } from './aws.service';

describe('AWSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AWSService]
    });
  });

  it('should ...', inject([AWSService], (service: AWSService) => {
    expect(service).toBeTruthy();
  }));
});
