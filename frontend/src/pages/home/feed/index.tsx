import { useQuery } from '@apollo/client';
import { GET_FEED } from '@/utils/queries';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle } from 'lucide-react';

const Feed = () => {
	const { data, loading, error } = useQuery(GET_FEED);

	if (loading) return <p>Loading...</p>;
	if (error) console.error(error);

	return (
		<div>
			{data?.posts?.map((post) => (
				<div key={post.id} className="border-b mt-6 pb-6">
					{/* post header */}
					<div className="flex items-center space-x-4">
						<Avatar>
							<AvatarImage src={post.author?.profile?.images?.[0].url} />
							<AvatarFallback>
								{post.author?.username[0].toUpperCase()}
							</AvatarFallback>
						</Avatar>

						<div>
							<p className="text-sm font-semibold leading-none">
								<span>{post.author?.profile?.firstName}</span>{' '}
								<span>{post.author?.profile?.lastName}</span>
							</p>
							<p className="mt-0.5 text-sm text-muted-foreground">
								@{post.author?.username}
							</p>
						</div>
					</div>

					{/* post content */}
					<p className="mt-2">{post.content}</p>

					{/* post image */}
					<img
						loading="lazy"
						className="mt-2 rounded"
						src="https://images.unsplash.com/photo-1682695796795-cc287af78a2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>

					{/* post footer */}
					<div className="mt-4 flex items-center gap-x-4">
						<Heart size={18} />
						<MessageCircle size={18} />
					</div>
				</div>
			))}
		</div>
	);
};

export default Feed;
