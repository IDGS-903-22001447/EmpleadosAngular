import { TestBed } from '@angular/core/testing';

import { EmpleadosService } from './empleados';

describe('Empleados', () => {
  let service: EmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
