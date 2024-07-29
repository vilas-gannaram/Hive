import 'reflect-metadata';
import {
	Arg,
	Resolver,
	Query,
	Ctx,
	FieldResolver,
	Root,
	Int,
} from 'type-graphql';
import User from './user.schema';
import { Context } from '../../types/context';
import UserProfile from '../userProfile/userProfile.schema';

@Resolver(User)
export default class UserResolver {
	//  Query single user
	@Query(() => User, { nullable: true })
	async user(
		@Arg('id', () => Int) id: number,
		@Ctx() ctx: Context
	): Promise<User | null> {
		return await ctx.prisma.user.findUnique({
			where: { id },
		});
	}

	// Query all users
	@Query(() => [User])
	async users(@Ctx() ctx: Context): Promise<User[]> {
		return await ctx.prisma.user.findMany();
	}

	// Field Resolver: Profile field
	@FieldResolver(() => UserProfile, { nullable: true })
	async profile(
		@Root() user: User,
		@Ctx() ctx: Context
	): Promise<UserProfile | null> {
		return await ctx.prisma.userProfile.findUnique({
			where: { userId: user.id },
		});
	}
}
