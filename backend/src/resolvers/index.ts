import 'reflect-metadata';
import { NonEmptyArray } from 'type-graphql';
import AuthResolver from './auth.resolver';
import UserResolver, { UserProfileResolver } from './user.resolver';

const resolvers: NonEmptyArray<Function> = [
	AuthResolver,
	UserResolver,
	UserProfileResolver,
];

export default resolvers;
