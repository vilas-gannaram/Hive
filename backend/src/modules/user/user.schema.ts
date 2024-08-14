import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class UserImage {
	@Field(() => ID)
	id: number;

	@Field()
	url: string;

	@Field()
	type: string;

	profileId: number;

	profile?: UserProfile;
}

@ObjectType()
export class UserProfile {
	@Field(() => ID)
	id: number;

	@Field(() => String, { nullable: true })
	firstName?: string | null;

	@Field(() => String, { nullable: true })
	lastName?: string | null;

	@Field(() => String, { nullable: true })
	bio?: string | null;

	// @Field(() => Int)
	userId: number;

	// @Field(() => User, { nullable: true })
	user?: User;
}

@ObjectType()
export default class User {
	@Field(() => ID)
	id: number;

	@Field()
	email: string;

	@Field()
	username: string;

	password: string;

	@Field(() => UserProfile, { nullable: true })
	profile?: UserProfile;
}
