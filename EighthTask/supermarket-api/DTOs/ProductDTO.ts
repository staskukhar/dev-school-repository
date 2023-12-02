import { Category } from "@prisma/client"
import { Decimal } from "@prisma/client/runtime/library";
import { IsDecimal, IsEnum, IsNotEmpty, IsNotEmptyObject, IsNumber, IsNumberString, IsString, ValidationError, isDecimal} from "class-validator";

export class ProductDTO {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmptyObject()
    @IsEnum(Category, {message: 'Invalid category type'})
    category: Category;

    @IsNumber()
    amount: number

    @IsNumber()
    price: Decimal
}