import { Controller, Param, ParseIntPipe, Patch, Body, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee as EmployeeModel} from '@prisma/client';
import { EmployeeDTO } from 'DTOs/employeeDTO';

@Controller('employee')
export class EmployeeController {
    constructor(
        private readonly employeeService: EmployeeService, 
    ) {}

    @Patch(':id')
    async updateEmployeeById(
        @Param('id', ParseIntPipe) id: number,
        @Body(new ValidationPipe()) employeeToUpdate: EmployeeDTO
    ) {
        return this.employeeService.updateEmployeeById(id, employeeToUpdate)
    }
}
