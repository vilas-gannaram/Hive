import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { GraphQLScalarType } from 'graphql';
import { DateTimeResolver } from 'graphql-scalars';
import { buildSchema } from 'type-graphql';

import { Context, context } from './types/context';
import resolvers from './modules';

const app = async () => {
	const schema = await buildSchema({
		resolvers,
		scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
		validate: { forbidUnknownValues: false },
	});

	const server = new ApolloServer<Context>({ schema });

	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
		context: async () => context,
	});

	console.log(`🚀  Server ready at: ${url}`);
};

app();
