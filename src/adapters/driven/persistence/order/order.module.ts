import { Module } from '@nestjs/common';
import { OrderRepository } from 'src/core/application/ports/order.repository';

@Module({
  providers: [
    {
      provide: OrderRepository,
      useValue: {}
    }
  ],
  exports: [OrderRepository]
})
export class PersistenceOrderModule {}
