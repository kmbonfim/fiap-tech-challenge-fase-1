import { NotPersistedOrder, Order } from "src/core/domain/order";

export interface OrderRepository {
  create(order: NotPersistedOrder): Promise<Order>;
  findAll(): Promise<Order[]>;
}