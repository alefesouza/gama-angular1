import { BoolPipe } from './bool.pipe';

describe('BoolPipe', () => {
  it('deve ser Sim', () => {
    const pipe = new BoolPipe();
    expect(pipe.transform(true)).toBe('Sim');
  });

  it('deve ser Não', () => {
    const pipe = new BoolPipe();
    expect(pipe.transform(false)).toBe('Não');
  });
});
