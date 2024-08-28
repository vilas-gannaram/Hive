import prisma from '@config/prisma';
import prima from '@config/prisma';
import CustomError from '@utils/customError';

export default class PostService {
	static getPostById = async (id: number) => {
		const post = await prima.post.findUnique({
			where: { id },
		});

		if (!post) throw CustomError.notFound('Post not found');
		return post;
	};

	static getAllPosts = async () => {
		return await prima.post.findMany({
			orderBy: {
				updatedAt: 'desc',
			},
		});
	};

	static getPostsByUserId = async (userId: number) => {
		return await prisma.post.findMany({
			where: { userId },
		});
	};
}
