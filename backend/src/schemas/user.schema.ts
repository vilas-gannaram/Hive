import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { IsEmail, Min, Max } from 'class-validator';

@ObjectType()
export class UserImage {
	@Field(() => ID)
	id: number;

	@Field(() => String)
	url: string;

	@Field(() => String)
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

	@Field(() => [UserImage], { nullable: true })
	images?: UserImage[];
}

@ObjectType()
export default class User {
	@Field(() => ID)
	id: number;

	@Field(() => String)
	@IsEmail()
	email: string;

	@Min(3)
	@Max(30)
	@Field(() => String)
	username: string;

	password: string;

	@Field(() => UserProfile, { nullable: true })
	profile?: UserProfile;
}
