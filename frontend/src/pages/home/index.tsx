import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { House, Search, Compass, UserRound } from 'lucide-react';

const navlinks = [
	{ label: 'Home', value: '/', icon: <House /> },
	{ label: 'Search', value: 'search', icon: <Search /> },
	{ label: 'Explore', value: 'explore', icon: <Compass /> },
	{ label: 'Profile', value: 'profile', icon: <UserRound /> },
];

const Home = () => {
	return (
		<ResizablePanelGroup direction="horizontal">
			<ResizablePanel minSize={15} maxSize={20}>
				<Button variant="link">
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
						Hive
					</h1>
				</Button>

				<nav className="mt-7 flex flex-col justify-between h-[80vh]">
					<ul className=" flex flex-col gap-y-1.5 items-start">
						{navlinks.map((navlink) => (
							<Button
								key={navlink.value}
								variant="ghost"
								className="flex gap-x-2"
							>
								<span>{navlink.icon}</span>
								<span className="text-lg font-medium"> {navlink.label}</span>
							</Button>
						))}
					</ul>

					<div className="px-2 flex items-center gap-x-4">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>

						<div>
							<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
								John Doe
							</h4>
							<small className="text-sm font-medium leading-none">
								johndoe@gmail.com
							</small>
						</div>
					</div>
				</nav>
			</ResizablePanel>
			<ResizableHandle />
			<ResizablePanel>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
					repellat atque molestiae quo voluptas id exercitationem illo corrupti
					quaerat, animi porro assumenda possimus nemo eligendi minus delectus,
					adipisci harum asperiores odit reiciendis nihil dicta maxime excepturi
					doloribus! Maiores nostrum porro iusto doloremque cumque nisi, earum,
					a magni quo soluta facilis praesentium rerum necessitatibus illo
					similique sapiente explicabo voluptatum eligendi atque ipsam nobis.
					Soluta inventore, nesciunt suscipit quod animi aliquam eligendi quae
					necessitatibus est consequatur repellat, iste tempora magni
					exercitationem. Vel alias consequatur incidunt? Laudantium similique
					esse ab asperiores cumque nulla?
				</div>
			</ResizablePanel>

			<ResizableHandle />
			<ResizablePanel maxSize={25}>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
					repellat atque molestiae quo voluptas id exercitationem illo corrupti
					quaerat, animi porro assumenda possimus nemo eligendi minus delectus,
					adipisci harum asperiores odit reiciendis nihil dicta maxime excepturi
					doloribus! Maiores nostrum porro iusto doloremque cumque nisi, earum,
					a magni quo soluta facilis praesentium rerum necessitatibus illo
					similique sapiente explicabo voluptatum eligendi atque ipsam nobis.
					Soluta inventore, nesciunt suscipit quod animi aliquam eligendi quae
					necessitatibus est consequatur repellat, iste tempora magni
					exercitationem. Vel alias consequatur incidunt? Laudantium similique
					esse ab asperiores cumque nulla?
				</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
};

export default Home;
