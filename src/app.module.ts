import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './adapters/driver/api/api.module';
import { OrderModule } from './core/application/services/order/order.module';
import { ProductModule } from './core/application/services/product/product.module';
import { CustomerModule } from './core/application/services/customer/customer.module';
import { PersistenceOrderModule } from './adapters/driven/persistence/order/order.module';
import { PersistenceProductModule } from './adapters/driven/persistence/product/product.module';
import { PersistenceCustomerModule } from './adapters/driven/persistence/customer/customer.module';

@Module({
  imports: [
    ApiModule,
    OrderModule,
    ProductModule,
    CustomerModule,
    PersistenceOrderModule,
    PersistenceProductModule,
    PersistenceCustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
