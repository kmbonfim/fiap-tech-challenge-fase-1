import { Prisma } from "@prisma/client"
import { ProductCategory, ProductCategoryValue } from "src/core/domain/value-objects/product-category";
import { NotPersistedOrder, Order } from "src/core/domain/order";
import { OrderStatusValue } from "src/core/domain/value-objects/order-status";
import { Injectable } from "@nestjs/common";

const orderWithCustomer = Prisma.validator<Prisma.OrderDefaultArgs>()({
	include: {
		customer: true,
	},
})

export type PrismaOrderWithCustomer = Prisma.OrderGetPayload<typeof orderWithCustomer>

@Injectable()
export class OrderMapper {
  toPersistence(order: Order | NotPersistedOrder) {
    return {
      customerId: order.customer.id,
      products: order.products.map(product => ({ ...product, category: product.category.getValue() })),
      total: order.total,
      status: order.status.getValue()
    }
  }

  fromPersistence(order: PrismaOrderWithCustomer) {
    return new Order({
      id: order.id,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      customer: order.customer,
      products: order.products.map(product => ({ ...product, category: new ProductCategory(ProductCategoryValue[product.category]) })),
      total: order.total,
      status: OrderStatusValue[order.status]
    })
  }
}