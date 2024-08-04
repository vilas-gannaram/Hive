import { Query, Resolver, Arg, FieldResolver, Root, Int } from 'type-graphql';
import User from '../user/user.schema';
import UserProfile from './userProfile.schema';
import UserService from '../user/user.service';
import UserProfileService from './userProfile.service';

@Resolver(UserProfile)
export default class UserProfileResolver {
	@Query(() => UserProfile, { nullable: true })
	async userProfile(
		@Arg('id', () => Int) id: number
	): Promise<UserProfile | null> {
		return await UserProfileService.getUserProfileById(id);
	}

	@FieldResolver(() => User, { nullable: true })
	async user(@Root() userProfile: UserProfile): Promise<User | null> {
		return await UserService.getUserById(userProfile.userId);
	}
}
