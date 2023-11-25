import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PrismaModule, ProductModule, CustomerModule, EmployeeModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
