import { Customer } from "./customer";
import { PersistedEntity } from "./persisted-entity";
import { Product } from "./product";
import { OrderStatus } from "./value-objects/order-status";

class _Order<T extends PersistedEntity | null> {
  id: T["id"];
  createdAt: T["createdAt"];
  updatedAt: T["updatedAt"];
  customer?: Customer;
  products: Product[];
  total: number;
  status: OrderStatus;
}

export class Order extends _Order<PersistedEntity> {}

export class NotPersistedOrder extends _Order<null> {}