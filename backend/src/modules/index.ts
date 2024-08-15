import 'reflect-metadata';
import { NonEmptyArray } from 'type-graphql';
import AuthResolver from './auth/auth.resolver';
import UserResolver from './user/user.resolver';

const resolvers: NonEmptyArray<Function> = [AuthResolver, UserResolver];

export default resolvers;
