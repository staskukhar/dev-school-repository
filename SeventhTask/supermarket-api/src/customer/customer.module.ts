import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CustomerController } from './customer.controller';

@Module({
  providers: [CustomerService],
  imports: [PrismaModule],
  controllers: [CustomerController],
})
export class CustomerModule {}
