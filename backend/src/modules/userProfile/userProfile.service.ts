import 'reflect-metadata';
import prisma from '../../config/prisma';

export default class UserProfileService {
	static getUserProfileById = async (id: number) => {
		return await prisma.userProfile.findUnique({
			where: { id },
		});
	};

	static getUserProfileByUserId = async (userId: number) => {
		return await prisma.userProfile.findUnique({
			where: { userId },
		});
	};
}
