import {
  IsNotEmpty,
  IsEmail,
  IsArray,
  Min,
  Max,
  IsNumber,
  IsMobilePhone,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCardsDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Min(10000)
  @Max(1000000)
  amount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsMobilePhone('vi-VN')
  phoneNumber: string;
}

export class CardsDto {
  email: string;
}

export class TopupDto {
  @ApiProperty()
  @Min(10000)
  @Max(1000000)
  @IsNumber()
  amount: number;
}
