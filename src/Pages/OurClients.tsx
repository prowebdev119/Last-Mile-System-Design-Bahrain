import React from 'react';
import ClientCard from '../Components/ClientCard';
import Layout from '../Components/Layout';
import { AiOutlineArrowRight } from 'react-icons/ai';
const OurClients = () => {
	return (
		<Layout selected="clients" title="Our Clients" description="">
			{/* MAIN */}
			<div className="text-web-gray mt-20 relative">
				{/* TITLE */}
				<div className=" text-2xl md:text-3xl font-bold mb-10  text-center xl:text-left">
					Our Clients speaks better than words!
				</div>
				{/* CARDS */}
				<div className="flex flex-wrap  justify-center xl:justify-between">
					<ClientCard
						companyName="Company Name"
						description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
						imageUrl="example-client"
					/>
					<ClientCard
						companyName="Company Name"
						description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
						imageUrl="example-client"
					/>
					<ClientCard
						companyName="Company Name"
						description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
						imageUrl="example-client"
					/>
					<ClientCard
						companyName="Company Name"
						description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
						imageUrl="example-client"
					/>
					<ClientCard
						companyName="Company Name"
						description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
						imageUrl="example-client"
					/>
					<ClientCard
						companyName="Company Name"
						description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
						imageUrl="example-client"
					/>
				</div>

				<div className=" cursor-pointer font-bold text-[#DD9933] flex space-x-3 items-center justify-center w-full">
					<div>Show More</div>
					<div>
						<AiOutlineArrowRight />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default OurClients;
