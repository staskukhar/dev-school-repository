import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomerNotFoundException extends HttpException {
    constructor() {
        super('Customer with such id not found', HttpStatus.NOT_FOUND)
    }
}