import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { PersistenceOrderModule } from 'src/adapters/driven/persistence/order/order.module';
import { PersistenceProductModule } from 'src/adapters/driven/persistence/product/product.module';

@Module({
  imports: [PersistenceOrderModule, PersistenceProductModule],
  providers: [OrderService]
})
export class OrderModule {}
