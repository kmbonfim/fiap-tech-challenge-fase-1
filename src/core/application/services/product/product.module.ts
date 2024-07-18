import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { PersistenceProductModule } from 'src/adapters/driven/persistence/product/product.module';

@Module({
  imports: [PersistenceProductModule],
  providers: [ProductService]
})
export class ProductModule {}
