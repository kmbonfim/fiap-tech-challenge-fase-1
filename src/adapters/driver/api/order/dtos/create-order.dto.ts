export class CreateOrderDto {
  customerId?: string;
  items: OrderItemDto[];
}

class OrderItemDto {
  productId: string;
  quantity: number;
}