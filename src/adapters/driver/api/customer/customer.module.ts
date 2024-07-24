import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerModule as ServiceCustomerModule } from 'src/core/application/services/customer/customer.module';

@Module({
  imports: [ServiceCustomerModule],
  controllers: [CustomerController],
})
export class CustomerModule {}
