import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/core/application/ports/order.repository';
import { PrismaService } from '../prisma.service';
import { NotPersistedOrder } from 'src/core/domain/order';

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
  constructor(private prismaService: PrismaService) {}

  async create(order: NotPersistedOrder) {
    return {} as any
  }

  async findAll() {
    return [] as any
  }
}
