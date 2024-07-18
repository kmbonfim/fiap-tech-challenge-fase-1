import { NotPersistedOrder, Order } from "src/core/domain/order";

export abstract class OrderRepository {
  abstract create(order: NotPersistedOrder): Promise<Order>;
  abstract findAll(): Promise<Order[]>;
}