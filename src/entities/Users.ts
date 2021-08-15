import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The user model' })
export class Users{
  @Field(() => ID)
  id: String;

  @Field()
  @Property()
  name: String;

  @Field()
  @Property()
  username: String;

  @Field()
  @Property()
  email: String;

  @Field()
  @Property()
  password: String;
}

export const UsersModel = getModelForClass(Users);
