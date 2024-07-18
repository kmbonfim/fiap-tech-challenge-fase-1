import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '../../ports/customer.repository';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { NotPersistedCustomer } from 'src/core/domain/customer';

@Injectable()
export class CustomerService {
  constructor(private customerRepository: CustomerRepository) {}

  async create(customer: CreateCustomerDto) {
    const newCustomer = new NotPersistedCustomer(customer);
    return this.customerRepository.create(newCustomer);
  }

  async login(email: string, document: string) {
    return this.customerRepository.findByEmailAndDocument(email, document);
  }
}
