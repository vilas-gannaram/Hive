import 'reflect-metadata';
import { MiddlewareFn } from 'type-graphql';
import jwt from 'jsonwebtoken';
import Context from '@config/context';
import CustomError from '@utils/customError';

export const authMiddleware: MiddlewareFn<Context> = async (
	{ context },
	next
) => {
	const authHeader = context.req.headers['authorization'];

	if (!authHeader)
		throw CustomError.unauthorized('Authorization header is missing');

	const token = authHeader.split(' ')[1];
	if (!token) throw CustomError.unauthorized('No token provided');

	try {
		const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);

		context.userId = (payload as any).userId; // Add userId to the context
	} catch (err) {
		throw CustomError.unauthorized('Not authenticated'); // Optionally throw an error if the token is invalid
	}

	return next();
};

export default authMiddleware;
