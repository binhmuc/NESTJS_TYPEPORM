import {
  IsEmail,
  Min,
  Max,
  IsNumber,
  IsMobilePhone,
  IsUrl,
  IsOptional,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole, Gender } from '../user.interface';
import { BaseDto } from '../../../shared/base.dto';
import { User } from '../users.entity';

export class UpdateUsersDto {
  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  username: string;

  @ApiProperty()
  @IsOptional()
  @Min(10000)
  @Max(1000000)
  amount: number;

  @ApiProperty()
  @IsOptional()
  @IsMobilePhone('vi-VN')
  phoneNumber: string;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  avatar: string;
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

export class PaymentDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  tripId: string;
}

export class UserDto extends BaseDto {
  @ApiPropertyOptional()
  username: string;

  @ApiPropertyOptional({ enum: UserRole })
  role: UserRole;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional({ enum: Gender })
  gender: Gender;

  @ApiPropertyOptional()
  amount: number;

  @ApiPropertyOptional()
  avatar: string;

  @ApiPropertyOptional()
  phoneNumber: string;

  constructor(user: User) {
    super(user);
    this.username = user.username;
    this.role = user.role;
    this.email = user.email;
    this.amount = user.amount;
    this.gender = user.gender;
    this.avatar = user.avatar;
    this.phoneNumber = user.phoneNumber;
  }
}
