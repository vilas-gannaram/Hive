import 'reflect-metadata';
import { NonEmptyArray } from 'type-graphql';
import UserResolver from './user/user.resolver';
import UserProfileResolver from './userProfile/userProfile.resolver';

const resolvers: NonEmptyArray<Function> = [UserResolver, UserProfileResolver];

export default resolvers;
