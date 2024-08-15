import 'reflect-metadata';
import { Arg, Mutation, Resolver } from 'type-graphql';
import AuthPayload from './auth.payload';
import LoginInput from './auth.input';
import AuthService from './auth.service';

@Resolver()
export default class AuthResolver {
	@Mutation(() => AuthPayload)
	async login(@Arg('data') data: LoginInput): Promise<AuthPayload> {
		const { email, password } = data;
		return AuthService.login(email, password);
	}

	// @Mutation(() => Boolean)
	// async logout(): Promise<boolean> {
	// 	return AuthService.logout();
	// }

	// @Mutation(() => AuthPayload)
	// async refreshToken(): Promise<AuthPayload> {
	// 	return AuthService.refreshToken();
	// }

	// @Mutation(() => Boolean)
	// async resetPassword(
	// 	@Arg('email') email: string,
	// ): Promise<boolean> {
	// 	return AuthService.resetPassword(email, );
	// }
}
