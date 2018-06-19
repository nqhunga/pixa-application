import { TestBed, inject } from '@angular/core/testing';

import { PixaDataService } from './pixa-data.service';

describe('PixaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PixaDataService]
    });
  });

  it('should be created', inject([PixaDataService], (service: PixaDataService) => {
    expect(service).toBeTruthy();
  }));
});
