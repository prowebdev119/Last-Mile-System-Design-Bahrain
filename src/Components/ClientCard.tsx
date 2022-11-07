import React from 'react';

const ClientCard: React.FC<{
	companyName: string;
	description: string;
	imageUrl: string;
}> = ({ companyName, description, imageUrl }) => {
	return (
		<div className="relative w-[80%] xl:w-[23%] h-[150px] xl:mr-10 mb-10 xl:!mr-auto">
			{/* TEXTS */}
			<img src={`${imageUrl}`} className="w-full h-full rounded-3xl" alt="" />

			<div className="hidden">{`<div className="absolute z-10 bottom-4 text-gray-500 hover:text-[#DD9933] transition-all duration-200  ml-5">
				<div className=" text-xl md:text-3xl font-bold">{companyName}</div>
				<div className="text-thin md:text-md font-thin mt-1">{description}</div>
				{/* SOCIALS */}
				<div className="flex space-x-2 mt-2">
					<a href="#">
						<img src="/svg/internation.svg" className="client-social" alt="" />
					</a>
					<a href="#">
						<img src="/svg/instagram.svg" className="client-social" alt="" />
					</a>
					<a href="#">
						<img src="/svg/facebook.svg" className="client-social" alt="" />
					</a>
					<a href="#">
						<img src="/svg/linkedin.svg" className="client-social" alt="" />
					</a>
				</div>
			</div>`}</div>
		</div>
	);
};

export default ClientCard;
