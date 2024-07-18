import { Customer } from "./customer";
import { Product } from "./product";
import { OrderStatus } from "./value-objects/order-status";

export class Order {
  id: string;
  customer?: Customer;
  products: Product[];
  total: number;
  status: OrderStatus;
}