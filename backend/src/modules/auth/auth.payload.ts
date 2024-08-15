import 'reflect-metadata';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class AuthPayload {
	@Field()
	accessToken: string;

	@Field()
	refreshToken: string;

	@Field()
	userId: number;
}
