import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { GraphQLScalarType } from 'graphql';
import { DateTimeResolver } from 'graphql-scalars';
import { buildSchema } from 'type-graphql';
import { config } from 'dotenv';

import type { Request } from 'express';

config();

import Context from '@config/context';
import resolvers from '@modules/index';

const app = async () => {
	const schema = await buildSchema({
		resolvers,
		scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
		validate: { forbidUnknownValues: false },
	});

	const server = new ApolloServer<Context>({ schema });
	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
		context: async ({ req }): Promise<Context> => {
			return { req: req as Request, userId: null };
		},
	});

	console.log(`🚀  Server ready at: ${url}`);
};

app();
