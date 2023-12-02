import { Order } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class EmployeeDTO {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsString()
    middleName: string;

    @IsString()
    @IsNotEmpty()
    position: string;
}