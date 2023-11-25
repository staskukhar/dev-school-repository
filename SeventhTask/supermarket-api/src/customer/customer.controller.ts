import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(
        private readonly customerService: CustomerService
    ) {}

    @Get(':id/orders')
    async getOrdersById(@Param('id', ParseIntPipe) id: number) {
        const orders = await this.customerService.getOrdersByCustomerId(id);
        
        if(orders == null || orders.length === 0) {
            throw new HttpException('Customer with such id not found', HttpStatus.FORBIDDEN);
        }
        return orders;
    }
}
