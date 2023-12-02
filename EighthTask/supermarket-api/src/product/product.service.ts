import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { ProductDTO } from 'DTOs/productDTO';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
    constructor(private prismaService: PrismaService) {}

    async createProduct(data: ProductDTO): Promise<Product> {
        return this.prismaService.product.create({
            data
        });
    }
}
