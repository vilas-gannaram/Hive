import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export default class User {
	@Field(() => ID)
	id: number;

	@Field()
	email: string;

	@Field()
	username: string;

	constructor(id: number, email: string, username: string) {
		this.id = id;
		this.email = email;
		this.username = username;
	}
}
