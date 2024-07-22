import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { ApiProductModule } from './product/product.module';

@Module({
  imports: [OrderModule, CustomerModule, ApiProductModule]
})
export class ApiModule {}
