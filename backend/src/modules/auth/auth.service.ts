import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import prisma from '@config/prisma';
import AuthPayload from './auth.payload';
import CustomError from '@utils/customError';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;

export default class AuthService {
	static async login(email: string, password: string): Promise<AuthPayload> {
		const user = await prisma.user.findUnique({ where: { email } });

		if (!user) {
			throw CustomError.conflict('User already exists');
		}

		if (!bcrypt.compareSync(password, user.password)) {
			throw CustomError.badRequest('Invalid credentials');
		}

		const tokens = await this.generateTokens(user.id);

		return {
			...tokens,
			userId: user.id,
		};
	}

	static async logout(): Promise<boolean> {
		// Invalidate tokens by removing them from a database or cache (if you store them)
		return true;
	}

	// static async refreshToken(ctx: Context): Promise<AuthPayload> {
	// 	const token = ctx.req.headers['authorization']?.split(' ')[1];
	// 	if (!token) throw new Error('No token provided');

	// 	const payload: any = jwt.verify(token, REFRESH_TOKEN_SECRET);
	// 	const newAccessToken = jwt.sign(
	// 		{ userId: payload.userId },
	// 		ACCESS_TOKEN_SECRET,
	// 		{ expiresIn: '15m' }
	// 	);
	// 	const newRefreshToken = jwt.sign(
	// 		{ userId: payload.userId },
	// 		REFRESH_TOKEN_SECRET,
	// 		{ expiresIn: '7d' }
	// 	);

	// 	return {
	// 		accessToken: newAccessToken,
	// 		refreshToken: newRefreshToken,
	// 		userId: payload.userId,
	// 	};
	// }

	// static async resetPassword(email: string, ctx: Context): Promise<boolean> {
	// 	const user = await ctx.prisma.user.findUnique({ where: { email } });
	// 	if (!user) {
	// 		throw new Error('User not found');
	// 	}

	// 	// Generate a password reset token and send an email to the user
	// 	// This can involve generating a token, saving it to the DB, and sending an email.

	// 	return true;
	// }

	static async generateTokens(userId: number) {
		const accessToken = jwt.sign({ userId }, ACCESS_TOKEN_SECRET, {
			expiresIn: '15m',
		});
		const refreshToken = jwt.sign({ userId }, REFRESH_TOKEN_SECRET, {
			expiresIn: '7d',
		});

		return { accessToken, refreshToken };
	}
}
