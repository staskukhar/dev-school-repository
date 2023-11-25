import { Controller, Param, ParseIntPipe, Patch, Body, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeService } from './employee.service';
import { Employee as EmployeeModel} from '@prisma/client';

@Controller('employee')
export class EmployeeController {
    constructor(
        private readonly employeeService: EmployeeService, 
    ) {}

    @Patch(':id')
    async updateEmployeeById(
        @Param('id', ParseIntPipe) id: number,
        @Body() employeeToUpdate: EmployeeModel
    ) {
        return this.employeeService.updateEmployeeById(id, employeeToUpdate)
    }
}
