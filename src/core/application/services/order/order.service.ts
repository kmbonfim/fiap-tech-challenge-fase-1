import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../ports/order.repository';
import { CreateOrderDto } from './dtos/create-order.dto';
import { NotPersistedOrder } from 'src/core/domain/order';
import { ProductRepository } from '../../ports/product.repository';
import { OrderStatusValue } from 'src/core/domain/value-objects/order-status';
import _ from 'lodash';

@Injectable()
export class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private productRepository: ProductRepository,
  ) {}

  async createOrder(order: CreateOrderDto) {
    const products = await this.productRepository.findByIDs(order.products.map(p => p.id));
    const indexedProducts = _.keyBy(products, 'id');
    const newOrder = new NotPersistedOrder({
      ...order,
      products: order.products.map(p => ({ ...p, ...indexedProducts[p.id] })),
      status: OrderStatusValue.Received,
      total: products.reduce((acc, p) => acc + p.price, 0),
    });
    return this.orderRepository.create(newOrder);
  }

  async findAll() {
    return this.orderRepository.findAll();
  }
}
