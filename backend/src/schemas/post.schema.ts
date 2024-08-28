import 'reflect-metadata';
import { Field, ID, ObjectType } from 'type-graphql';
import User from './user.schema';

@ObjectType()
export default class Post {
	@Field(() => ID)
	id: number;

	@Field(() => String)
	title: string;

	@Field(() => String)
	content: string;

	@Field(() => String, { nullable: true })
	image_url?: string | null;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;

	userId?: number;

	author?: User;
}
