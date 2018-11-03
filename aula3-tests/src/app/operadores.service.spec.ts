import { TestBed } from '@angular/core/testing';

import { OperadoresService } from './operadores.service';

describe('OperadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('deve ser 3 ao adicionar 1 + 2', () => {
    const service: OperadoresService = TestBed.get(OperadoresService);

    expect(service.add(1, 2)).toBe(3);
  });

  it('não deve ser 4 ao adicionar 1 + 2', () => {
    const service: OperadoresService = TestBed.get(OperadoresService);

    expect(service.add(1, 2)).not.toBe(4);
  });
});
