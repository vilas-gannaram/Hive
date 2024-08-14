import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateUserInput {
	@Field()
	email: string;

	@Field()
	username: string;

	@Field()
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
