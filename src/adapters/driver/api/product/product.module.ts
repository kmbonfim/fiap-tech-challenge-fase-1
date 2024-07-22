import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductModule } from 'src/core/application/services/product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [ProductController]
})
export class ApiProductModule {}
