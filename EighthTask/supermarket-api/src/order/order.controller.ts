import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(
        private readonly orderService: OrderService
    ) {}

    @Delete(':id')
    async deleteOrderById(@Param('id', ParseIntPipe) id: number) {
        return this.orderService.deleteOrderById(id);
    }
}
