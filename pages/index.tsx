import Image from "next/image";
import data from "../data.json";

function LinkCard({
	href,
	title,
	image,
}: {
	href: string;
	title: string;
	image?: string;
}) {
	return (
		<a
			href=''
			className='flex items-center p-4 w-full rounded-md hover:scale-105 transition-all border border-gray-300 mb-3'>
			<div className='flex flex-col'>
				<h2 className='font-bold text-lg'>{title}</h2>
			</div>
		</a>
	);
}

const HomePage = () => {
	return (
		<div className='flex flex-col items-center mt-16 justify-center mx-auto w-full px-8'>
			<Image
				className='rounded-full'
				src={data.avatar}
				width={96}
				height={96}
				alt=''
			/>
			<h1 className='font-semibold mt-4 mb-8 text-xl'>{data.name}</h1>
			{data.links.map((link) => (
				<LinkCard key={link.title} {...link} />
			))}
		</div>
	);
};

export default HomePage;
