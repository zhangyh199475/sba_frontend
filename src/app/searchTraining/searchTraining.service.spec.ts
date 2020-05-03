/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchTrainingService } from './searchTraining.service';

describe('Service: SearchTraining', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchTrainingService]
    });
  });

  it('should ...', inject([SearchTrainingService], (service: SearchTrainingService) => {
    expect(service).toBeTruthy();
  }));
});
