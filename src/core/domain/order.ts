import { Customer } from "./customer";
import { PersistedEntity } from "./persisted-entity";
import { Product } from "./product";
import { OrderStatus, OrderStatusValue } from "./value-objects/order-status";

class _Order<T extends PersistedEntity | null> {
  id: T["id"];
  createdAt: T["createdAt"];
  updatedAt: T["updatedAt"];
  customer?: Customer;
  products: Product[];
  total: number;
  status: OrderStatus;

  constructor(order: { customer?: Customer; products: Product[]; status: OrderStatusValue; total: number }) {
    this.customer = order.customer;
    this.products = order.products;
    this.total = order.total;
    this.status = new OrderStatus(order.status);
  }
}

export class Order extends _Order<PersistedEntity> {}

export class NotPersistedOrder extends _Order<null> {}