import { HttpException, HttpStatus } from "@nestjs/common";

export class OrderNotFoundException extends HttpException {
    constructor() {
        super('Order with such id not found', HttpStatus.BAD_REQUEST)
    }
}