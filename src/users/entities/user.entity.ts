import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único del usuario' })
  id: number;

  @Column({ unique: true })
  @ApiProperty({ description: 'Nombre del usuario' })
  name: string;

  @Column({ unique: true })
  @ApiProperty({ description: 'Correo electrónico del usuario' })
  email: string;

  @Column()
  @ApiProperty({ description: 'Edad del usuario' })
  age: number;

  @Column({ nullable: true })
  @ApiProperty({ description: 'Ciudad del usuario', required: false })
  city: string;

  @CreateDateColumn()
  @ApiProperty({ description: 'Fecha de creación del usuario' })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ description: 'Fecha de última actualización del usuario' })
  updatedAt: Date;
}
