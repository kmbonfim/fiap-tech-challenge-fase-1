import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dtos/create-order.dto';

@ApiTags('order')
@Controller('order')
export class OrderController {

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return 'This action adds a new order' + JSON.stringify(createOrderDto);
  }

  @Get()
  findAll() {
    return 'This action returns all orders';
  }

}
