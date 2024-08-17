import { MiddlewareFn } from 'type-graphql';
import jwt from 'jsonwebtoken';
import Context from '@config/context';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

if (!ACCESS_TOKEN_SECRET) {
	throw new Error(
		'ACCESS_TOKEN_SECRET is not defined in environment variables.'
	);
}

export const authMiddleware: MiddlewareFn<Context> = async (
	{ context },
	next
) => {
	const authHeader = context.req.headers['authorization'];

	if (authHeader) {
		const token = authHeader.split(' ')[1];
		try {
			const payload = jwt.verify(token, ACCESS_TOKEN_SECRET);
			context.userId = (payload as any).userId; // Add userId to the context
		} catch (err) {
			console.error('Invalid token');
			throw new Error('Not authenticated'); // Optionally throw an error if the token is invalid
		}
	} else {
		throw new Error('Authorization header is missing'); // Optionally throw an error if no auth header is present
	}

	return next();
};

export default authMiddleware;
