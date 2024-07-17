import { Body, Controller, Post } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginCustomerDto } from './dtos/login-customer.dto';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer:' + createCustomerDto;
  }

  @Post('login')
  login(@Body() loginCustomerDto: LoginCustomerDto) {
    return 'This action logs in a customer:' + loginCustomerDto;
  }

}