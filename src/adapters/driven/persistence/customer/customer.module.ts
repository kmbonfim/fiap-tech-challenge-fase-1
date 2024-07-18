import { Module } from '@nestjs/common';
import { CustomerRepository } from 'src/core/application/ports/customer.repository';

@Module({
  providers: [
    {
      provide: CustomerRepository,
      useValue: {}
    }
  ],
  exports: [CustomerRepository]
})
export class PersistenceCustomerModule {}
