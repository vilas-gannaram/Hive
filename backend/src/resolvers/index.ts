import 'reflect-metadata';
import { NonEmptyArray } from 'type-graphql';
import AuthResolver from './auth.resolver';
import UserResolver, { UserProfileResolver } from './user.resolver';
import PostResolver from './post.resolver';

const resolvers: NonEmptyArray<Function> = [
	AuthResolver,
	UserResolver,
	UserProfileResolver,
	PostResolver,
];

export default resolvers;
