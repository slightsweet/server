import { ApiExtraModels } from '@nestjs/swagger';
import { $Enums,Like, Prisma,Post, Achievement, Demand,Role } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsInt,
  IsNotEmpty,
  Length,
  IsNumberString,
} from 'class-validator';
import { UserDto } from 'prisma/dto';



export class GetUsersDto {

  skip: number = 0;
  @IsInt({ message: 'take必须是一个数字！' })
  @Type(() => Number)
  take: number = 99999;
  cursor?: Prisma.UserWhereUniqueInput;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput;

}

export class CreateUserDto {
  @IsString()
  phoneNumber: string
  profile?:  Prisma.ProfileCreateInput
  status?: $Enums.UserStatus
  isSuperPal?: boolean
  roles?: string[]
  views?: number
  achievementIds?:  string[]
  chatroomIds?:  string[]
}

export class UpdateUserDto extends CreateUserDto{
  @IsString({message:''})
  id: string
}
