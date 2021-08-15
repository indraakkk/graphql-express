import { InputType, Field } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { Users } from '../entities/Users';

@InputType()
export class UsersInput implements Partial<Users> {
  @Field()
  name!: string;

  @Field()
  username!: string;

  @Field()
  @IsEmail()
  email!: string;

  @Field()
  password!: string;
}
