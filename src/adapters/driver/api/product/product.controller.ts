import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProductDto, ProductCategory } from './dtos/create-product.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return 'This action adds a new product: ' + JSON.stringify(createProductDto);
  }

  @Get()
  @ApiQuery({ name: 'category', enum: ['beverage', 'side-dish'] })
  find(@Query('category') category: ProductCategory) {
    return 'This action returns all products: ' + category;
  }

  @Delete()
  delete(@Param('id') id: string) {
    return 'This action removes a product: ' + id;
  }

  @Put()
  update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto) {
    return 'This action updates a product: ' + id + ' ' + JSON.stringify(updateProductDto);
  }

}
