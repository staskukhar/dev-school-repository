import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { CustomerNotFoundException } from "exceptions/customerNotFoundException";
import { OrderNotFoundException } from "exceptions/orderNotFoundException";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CustomerIdPipeParse implements PipeTransform {
    constructor(
        private readonly prismaService: PrismaService
    ) {}
    async transform(value: any, metadata: ArgumentMetadata) {
        const id: number = parseInt(value)

        const data = await this.prismaService.order.findMany({
            where: {
                customer: {
                    id: id
                }
            }
        });

        if(data == null || data.length === 0) throw new CustomerNotFoundException();

        return id;
    }
}