import {
	Ctx,
	Query,
	Resolver,
	Arg,
	FieldResolver,
	Root,
	Int,
} from 'type-graphql';
import User from '../user/user.schema';
import UserProfile from './userProfile.schema';
import { Context } from '../../types/context';

@Resolver(UserProfile)
export default class UserProfileResolver {
	@Query(() => UserProfile, { nullable: true })
	async userProfile(
		@Arg('id', () => Int) id: number,
		@Ctx() ctx: Context
	): Promise<UserProfile | null> {
		return await ctx.prisma.userProfile.findUnique({
			where: { id },
			include: { user: true },
		});
	}

	@FieldResolver(() => User, { nullable: true })
	async user(
		@Root() userProfile: UserProfile,
		@Ctx() ctx: Context
	): Promise<User | null> {
		return await ctx.prisma.user.findUnique({
			where: { id: userProfile.id },
		});
	}
}
