import CustomError from '@utils/customError';
import Context from '@config/context';
import { MiddlewareFn } from 'type-graphql';
import { GraphQLError } from 'graphql';

const errorMiddleware: MiddlewareFn<Context> = async ({}, next) => {
	try {
		return await next();
	} catch (error) {
		// If the error is a CustomError, set the HTTP status code and throw a GraphQLError
		if (error instanceof CustomError) {
			throw new GraphQLError(error.message, {
				extensions: {
					code: error.code,
					http: {
						status: error.statusCode,
					},
				},
			});
		}

		// For non-custom errors, re-throw them
		throw error;
	}
};

export default errorMiddleware;
