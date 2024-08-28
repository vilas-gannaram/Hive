import 'reflect-metadata';
import { Arg, FieldResolver, Int, Query, Resolver, Root } from 'type-graphql';
import User from '@schemas/user.schema';
import Post from '@schemas/post.schema';
import PostService from '@services/post.service';
import UserService from '@services/user.service';

@Resolver(Post)
export default class PostResolver {
	// Queries:

	// Gets a single post by its id
	@Query(() => Post, { nullable: true })
	async post(@Arg('id', () => Int) id: number): Promise<Post | null> {
		return PostService.getPostById(id);
	}

	// Gets all posts from db
	@Query(() => [Post], { nullable: true })
	async posts(): Promise<Post[]> {
		return await PostService.getAllPosts();
	}

	//  Field Resolvers:
	@FieldResolver(() => User, { nullable: true })
	async author(@Root() post: Post): Promise<User | null> {
		if (!post.userId) return null;
		return UserService.getUserById(post.userId);
	}
}
