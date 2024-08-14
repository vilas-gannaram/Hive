import 'reflect-metadata';
import prisma from '../../config/prisma';
import { CreateUserInput, CreateUserProfileInput } from './user.input';

export default class UserService {
	static getUsers = async () => {
		return await prisma.user.findMany();
	};

	static getUserById = async (id: number) => {
		return await prisma.user.findUnique({ where: { id } });
	};

	static createUser = async (userData: CreateUserInput) => {
		return await prisma.user.create({ data: userData });
	};

	//  USER_PROFILE
	//  get userProfile by userId
	static getUserProfileByUserId = async (userId: number) => {
		return await prisma.userProfile.findUnique({
			where: { userId },
		});
	};

	// create user profile
	// static createUserProfile = async (data: CreateUserProfileInput, userInfo) => {
	// 	return await prisma.userProfile.create({
	// 		data: {
	// 			firstName: data.firstName,
	// 			lastName: data.lastName,
	// 			bio: data.bio,
	// 			user: {
	// 				connect: { email: userInfo.email },
	// 			},
	// 		},
	// 	});
	// };

	// USER_IMAGES
	//  get userImages by profileId
	static getUserImagesByProfileId = async (profileId: number) => {
		return await prisma.userImage.findMany({
			where: {
				profileId,
			},
		});
	};
}
