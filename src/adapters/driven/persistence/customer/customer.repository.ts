import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CustomerRepository } from 'src/core/application/ports/customer.repository';
import { NotPersistedCustomer } from 'src/core/domain/customer';
import { CustomerMapper } from './customer.mapper';

@Injectable()
export class PrismaCustomerRepository implements CustomerRepository {
  constructor(
    private prismaService: PrismaService,
    private customerMapper: CustomerMapper
  ) {}

  async create(customer: NotPersistedCustomer) {
    const persistedCustomer = await this.prismaService.customer.create({
      data: {
        name: customer.name,
        email: customer.email,
        document: customer.document
      }
    });
    return this.customerMapper.fromPersistence(persistedCustomer);
  }

  async findByEmailAndDocument(email: string, document: string) {
    const persistedCustomer = await this.prismaService.customer.findFirst({
      where: {
        email,
        document
      }
    });
    return this.customerMapper.fromPersistence(persistedCustomer);
  }
}
