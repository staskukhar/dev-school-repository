import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, UsePipes } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerIdPipeParse } from 'pipes/CustomerIdPipeParse';

@Controller('customer')
export class CustomerController {
    constructor(
        private readonly customerService: CustomerService
    ) {}

    @Get(':id/orders')
    async getOrdersById(@Param('id', CustomerIdPipeParse) id: number) {
        return this.customerService.getOrdersByCustomerId(id);
    }
}
