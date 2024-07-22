import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/core/application/ports/product.repository';
import { NotPersistedProduct, Product } from 'src/core/domain/product';
import { ProductCategoryValue } from 'src/core/domain/value-objects/product-category';
import { PrismaService } from '../prisma.service';
import { ProductMapper } from './product.mapper';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(
    private prismaService: PrismaService,
    private productMapper: ProductMapper
  ) {}

  async create(product: NotPersistedProduct) {
    const persistedProduct = await this.prismaService.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category.getValue()
      }
    })
    return this.productMapper.fromPersistence(persistedProduct)
  }

  async findByIDs(ids: string[]) {
    const persistedProducts = await this.prismaService.product.findMany({
      where: {
        id: {
          in: ids
        }
      }
    })
    return persistedProducts.map(this.productMapper.fromPersistence)
  }

  async findByCategory(category: ProductCategoryValue) {
    const persistedProducts = await this.prismaService.product.findMany({
      where: {
        category: category
      }
    })
    return persistedProducts.map(this.productMapper.fromPersistence)
  }

  async delete(id: string) {
    await this.prismaService.product.delete({
      where: {
        id
      }
    })
  }

  async update(id: string, product: Product) {
    const persistedProduct = await this.prismaService.product.update({
      where: {
        id
      },
      data: this.productMapper.toPersistence(product)
    })
    return this.productMapper.fromPersistence(persistedProduct)
  }

  async find(id: string) {
    const persistedProduct = await this.prismaService.product.findUnique({
      where: {
        id
      }
    })
    return this.productMapper.fromPersistence(persistedProduct)
  }
}