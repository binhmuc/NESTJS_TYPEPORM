import { Column, Entity, OneToMany } from 'typeorm';
import { MaxLength, IsOptional, IsString } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { BaseModel } from '../../shared/base.entity';
import { Transaction } from '../transactions/transactions.entity';
import { Gender } from './gender.enum';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Card extends BaseModel {
  @Column()
  amount: number;

  @IsOptional({ groups: [UPDATE] })
  @MaxLength(100, { always: true })
  @IsString({ always: true })
  @Column({ type: 'varchar', length: 100, nullable: true })
  name: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  gender: Gender;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, nullable: true })
  phoneNumber: string;

  @Column({ default: 0, type: 'int', name: 'total_transaction' })
  totalTransaction: number;

  @OneToMany(() => Transaction, (transaciton) => transaciton.card, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  transactions: Transaction[];
}
