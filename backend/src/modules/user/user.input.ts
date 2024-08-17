import 'reflect-metadata';
import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateUserInput {
	@Field(() => String)
	email: string;

	@Field(() => String)
	username: string;

	@Field(() => String)
	password: string;
}

@InputType()
export class CreateUserProfileInput {
	@Field(() => String, { nullable: true })
	firstName: string;

	@Field(() => String, { nullable: true })
	lastName: string;

	@Field(() => String, { nullable: true })
	bio: string;
}
