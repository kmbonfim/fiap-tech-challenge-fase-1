import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderModule as ServiceOrderService } from 'src/core/application/services/order/order.module';

@Module({
  imports: [ServiceOrderService],
  controllers: [OrderController],
})
export class OrderModule {}
