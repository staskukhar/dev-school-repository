import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { EmployeeDTO } from 'DTOs/employeeDTO';
import { EmployeeNotFoundException } from 'exceptions/employeeNotFoundException';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
    constructor(
        private prismaService: PrismaService
    ) {}

    async updateEmployeeById(id: number, employeeToUpdate: EmployeeDTO): Promise<Employee> | null{
        return this.prismaService.employee.update({
            where: {
                id: id,
            },
            data: {
                firstName: employeeToUpdate.firstName,
                lastName: employeeToUpdate.lastName,
                middleName: employeeToUpdate.middleName,
                position: employeeToUpdate.position,
            },
        }).catch((error) =>{
            throw new EmployeeNotFoundException()
        });  
    }
}
