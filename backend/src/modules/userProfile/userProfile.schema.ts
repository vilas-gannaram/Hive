import 'reflect-metadata';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import User from '../user/user.schema';

@ObjectType()
export default class UserProfile {
	@Field(() => ID)
	id: number;

	@Field(() => String, { nullable: true })
	firstName?: string | null;

	@Field(() => String, { nullable: true })
	lastName?: string | null;

	@Field(() => String, { nullable: true })
	bio?: string | null;

	@Field(() => Int)
	userId: number;

	// @Field(() => User, { nullable: true })
	user?: User | null;
}
