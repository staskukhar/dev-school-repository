import { Category } from "@prisma/client"
import { Decimal } from "@prisma/client/runtime/library";
import { IsDecimal, IsEnum, IsNumber, IsNumberString, IsString, ValidationError, isDecimal} from "class-validator";

export class ProductDTO {
    @IsString()
    name: string;
    //@Error('Invalid category type')
    @IsEnum(Category, {message: 'Invalid category type'})
    category: Category;
    @IsNumber()
    amount: number
    @IsNumber()
    price: Decimal
}