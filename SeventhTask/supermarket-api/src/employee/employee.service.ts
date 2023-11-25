import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Employee, Prisma } from '@prisma/client';
import { error } from 'console';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
    constructor(
        private prismaService: PrismaService
    ) {}

    async updateEmployeeById(id: number, employeeToUpdate: Employee): Promise<Employee> | null{
        return this.prismaService.employee.update({
            where: {
                id: id,
            },
            data: employeeToUpdate,
        }).catch((error) =>{
            throw new HttpException('Employee with such id not found', HttpStatus.NOT_FOUND)
        });  
    }
}
