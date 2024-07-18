import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../ports/product.repository';
import { ProductCategoryValue } from 'src/core/domain/value-objects/product-category';
import { CreateProductDto } from './dtos/create-product.dto';
import { NotPersistedProduct } from 'src/core/domain/product';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async findByCategory(category: ProductCategoryValue) {
    return this.productRepository.findByCategory(category);
  }

  async create(product: CreateProductDto) {
    const newProduct = new NotPersistedProduct(product);
    return this.productRepository.create(newProduct);
  }

  async delete(id: string) {
    return this.productRepository.delete(id);
  }

  async update(id: string, product: CreateProductDto) {
    const persistedProduct = await this.productRepository.find(id);
    persistedProduct.update(product);
    return this.productRepository.update(id, persistedProduct);
  }
}
