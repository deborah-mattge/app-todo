import { PropriedadeModule } from './propriedade.module';

describe('PropriedadeModule', () => {
  let propriedadeModule: PropriedadeModule;

  beforeEach(() => {
    propriedadeModule = new PropriedadeModule();
  });

  it('should create an instance', () => {
    expect(propriedadeModule).toBeTruthy();
  });
});
