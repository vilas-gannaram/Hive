import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import UserProfile from '../userProfile/userProfile.schema';

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
	profile?: UserProfile | null;
}
