import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerService {
    constructor(
        private prismaService: PrismaService
    ) {}

    async getOrdersByCustomerId(customerId: number): Promise<Order[]> | null {
        return this.prismaService.order.findMany({
                where: {
                    customer: {
                        id: customerId
                    }
                }
        });
    }
}
