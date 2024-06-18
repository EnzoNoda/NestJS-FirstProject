import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';
import { AuthLoginDTO } from './auth-login.dto';
import { Role } from '../../enums/role.enum';

export class AuthRegisterDTO extends AuthLoginDTO {
  @IsString()
  name: string;

  @IsOptional()
  @IsDateString()
  birthAt?: string;
  @IsOptional()
  @IsEnum(Role)
  role?: number;
}
