export class CreateOrderDto {
  customerId?: string;
  products: OrderProductDto[];
}

class OrderProductDto {
  id: string;
  quantity: number;
}