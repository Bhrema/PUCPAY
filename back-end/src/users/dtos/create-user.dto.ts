import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string

  @IsString()
  cpf_cnpj: string

  @IsString()
  password: string;
}
