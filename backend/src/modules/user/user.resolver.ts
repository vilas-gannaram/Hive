import 'reflect-metadata';
import { Arg, Resolver, Query, Ctx } from 'type-graphql';
import User from './user.schema';
import { Context } from '../../types/context';

@Resolver(User)
export default class UserResolver {
	@Query(() => User, { nullable: true })
	async user(
		@Arg('id', () => Number) id: number,
		@Ctx() ctx: Context
	): Promise<User | null> {
		// Perform database query here
		const user = await ctx.prisma.user.findUnique({
			where: { id },
		});
		return user;
	}
}
