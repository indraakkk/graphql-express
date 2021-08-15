import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { Users, UsersModel } from '../entities/Users';
import { UsersInput } from '../types/user-input';

@Resolver()
export class UsersResolver {
  // belum punya entities
  @Query((_returns) => Users, { nullable: false })
  async returnAllSingleUser(@Arg('id') id: string) {
    return await UsersModel.findById({ _id: id });
  }

  @Query(() => [Users])
  async retulAllUsers() {
    return await UsersModel.find({});
  }

  @Mutation(() => Users)
  async createUser(
    @Arg('data') { name, username, email, password }: UsersInput
  ): Promise<Users> {
    const user = (
      await UsersModel.create({
        name,
        username,
        email,
        password,
      })
    ).save();
    return user;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('id') id: string) {
    await UsersModel.deleteOne({ id });
    return true;
  }
}
