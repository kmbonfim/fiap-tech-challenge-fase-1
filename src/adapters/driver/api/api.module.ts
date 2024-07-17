import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [OrderModule, CustomerModule, ProductModule]
})
export class ApiModule {}
