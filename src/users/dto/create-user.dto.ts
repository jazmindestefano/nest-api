import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Juan Perez', description: 'Nombre del usuario' })
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser un texto' })
  name: string;

  @ApiProperty({ example: 'juan@ejemplo.com', description: 'Correo electru00f3nico del usuario' })
  @IsNotEmpty({ message: 'El correo electru00f3nico es requerido' })
  @IsEmail({}, { message: 'El correo electru00f3nico no es vu00e1lido' })
  email: string;

  @ApiProperty({ example: 25, description: 'Edad del usuario' })
  @IsNotEmpty({ message: 'La edad es requerida' })
  @IsNumber({}, { message: 'La edad debe ser un nu00famero' })
  @Min(0, { message: 'La edad debe ser mayor o igual a 0' })
  age: number;

  @ApiProperty({ example: 'Buenos Aires', description: 'Ciudad del usuario', required: false })
  @IsOptional()
  @IsString({ message: 'La ciudad debe ser un texto' })
  city?: string;
}
