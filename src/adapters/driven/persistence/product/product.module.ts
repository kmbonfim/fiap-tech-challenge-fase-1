import { Module } from '@nestjs/common';
import { ProductRepository } from 'src/core/application/ports/product.repository';

@Module({
  providers: [
    {
      provide: ProductRepository,
      useValue: {}
    }
  ],
  exports: [ProductRepository]
})
export class PersistenceProductModule {}
