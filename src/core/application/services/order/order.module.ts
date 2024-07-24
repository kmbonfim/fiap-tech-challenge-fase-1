import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { PersistenceOrderModule } from 'src/adapters/driven/persistence/order/order.module';
import { PersistenceProductModule } from 'src/adapters/driven/persistence/product/product.module';
import { PersistenceCustomerModule } from 'src/adapters/driven/persistence/customer/customer.module';

@Module({
  imports: [PersistenceOrderModule, PersistenceProductModule, PersistenceCustomerModule],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrderModule {}
