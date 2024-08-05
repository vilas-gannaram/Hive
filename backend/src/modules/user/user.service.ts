import 'reflect-metadata';
import prisma from '../../config/prisma';

export default class UserService {
	static getUsers = async () => {
		return await prisma.user.findMany();
	};

	static getUserById = async (id: number) => {
		return await prisma.user.findUnique({ where: { id } });
	};

	//  USER_PROFILE
	//  get userProfile by userId
	static getUserProfileByUserId = async (userId: number) => {
		return await prisma.userProfile.findUnique({
			where: { userId },
		});
	};
}
