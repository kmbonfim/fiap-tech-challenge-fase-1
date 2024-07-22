import { Test, TestingModule } from '@nestjs/testing';
import { PrismaProductRepository } from './product.repository';

describe('ProductRepository', () => {
  let Repository: PrismaProductRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaProductRepository],
    }).compile();

    Repository = module.get<PrismaProductRepository>(PrismaProductRepository);
  });

  it('should be defined', () => {
    expect(Repository).toBeDefined();
  });
});
