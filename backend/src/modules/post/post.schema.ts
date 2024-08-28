import 'reflect-metadata';
import User from '@modules/user/user.schema';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export default class Post {
	@Field()
	id: number;

	@Field()
	title: string;

	@Field()
	content: string;

	@Field()
	image_url: string;

	@Field()
	createdAt: Date;

	@Field()
	updatedAt: Date;

	@Field(() => User)
	author: User;
}
