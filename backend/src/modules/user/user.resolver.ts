import 'reflect-metadata';
import { Arg, Resolver, Query, FieldResolver, Root, Int } from 'type-graphql';
import User, { UserProfile } from './user.schema';
import UserService from './user.service';

@Resolver(User)
export default class UserResolver {
	//  Query single user
	@Query(() => User, { nullable: true })
	async user(@Arg('id', () => Int) id: number): Promise<User | null> {
		return await UserService.getUserById(id);
	}

	// Query all users
	@Query(() => [User])
	async users(): Promise<User[]> {
		return await UserService.getUsers();
	}

	// Field Resolver: Profile field
	@FieldResolver(() => UserProfile, { nullable: true })
	async profile(@Root() user: User): Promise<UserProfile | null> {
		return await UserService.getUserProfileByUserId(user.id);
	}
}
