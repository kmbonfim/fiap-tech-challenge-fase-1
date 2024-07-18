import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { PersistenceCustomerModule } from 'src/adapters/driven/persistence/customer/customer.module';

@Module({
  imports: [PersistenceCustomerModule],
  providers: [CustomerService]
})
export class CustomerModule {}
