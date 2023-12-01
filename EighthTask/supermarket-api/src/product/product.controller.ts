import { Body, Controller, Post,ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from 'DTOs/ProductDTO';

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) {}

    @Post('create')
    async createProduct(
        @Body(new ValidationPipe()) 
        inputProduct: ProductDTO
    ) {
        return this.productService.createProduct(inputProduct);
    }
}
