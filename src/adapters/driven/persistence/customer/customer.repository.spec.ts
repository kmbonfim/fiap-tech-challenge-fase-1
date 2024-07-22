import { Test, TestingModule } from '@nestjs/testing';
import { PrismaCustomerRepository } from '../customer/customer.repository';

describe('CustomerRepository', () => {
  let Repository: PrismaCustomerRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaCustomerRepository],
    }).compile();

    Repository = module.get<PrismaCustomerRepository>(PrismaCustomerRepository);
  });

  it('should be defined', () => {
    expect(Repository).toBeDefined();
  });
});
