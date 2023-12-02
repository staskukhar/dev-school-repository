import { HttpException, HttpStatus } from "@nestjs/common";

export class EmployeeNotFoundException extends HttpException{
    constructor() {
        super('Employee with such id not found', HttpStatus.NOT_FOUND) 
    }
}