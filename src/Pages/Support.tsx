import React from 'react';
import Layout from '../Components/Layout';
import RoadmapItem from '../Components/RoadmapItem';
import ServiceItem from '../Components/ServiceItem';

const Support = () => {
	return (
		<Layout
			selected="services"
			title="Support & Services"
			description="Create Your Own Genuine Web Masterpiece"
		>
			<div className="mt-14 flex justify-center md:justify-between">
				{/* LEFT */}
				<div className="flex flex-col md:items-start items-center w-[80%] md:w-[50%]">
					<div className="font-thin leading-7 fancy-text">
					LMT is keen to apply the highest quality standards in the provision of after-sales services, whether through partners or the provision of annual maintenance contracts with periodic visits to ensure the continuity of the efficiency of the devices with the submission of periodic reports to ensure customer satisfaction with the services and ensure the continuity of service without interruption.
					</div>
				</div>

				{/* RIGHT */}
				<div className="hidden md:block -ml-5">
					<img
						src="/jpg/services.jpg"
						className="-mt-[150px] hover:scale-110 transition-all duration-300"
						alt=""
					/>
				</div>
			</div>
			<div className="flex flex-col mx-10 md:mx-0 space-y-5 md:space-y-0 md:flex-row md:w-full md:space-x-5  items-center justify-between mt-[100px] ">
				<ServiceItem
					title="Inventive Elements"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					img="services1"
				/>
				<ServiceItem
					title="Designed With care"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					img="services2"
				/>
				<ServiceItem
					title="Imagine and Create"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					img="services3"
				/>
			</div>

			{/* ROADMAP */}
			<div className="mt-[100px]  text-web-gray  ">
				<div className="text-2xl md:text-[50px] font-bold text-center mb-10">
					Projects Roadmap
				</div>

				<div className="flex  justify-between   space-x-10 w-full ">
					{/* LEFT */}
					<div className="flex flex-col fle space-y-10 md:!mr-10">
						<img
							src="/jpg/roadmap1.jpg"
							className="md:w-[80%] hover:scale-110 transition-all duration-300 block row-span-3 w-[90%]"
							alt=""
						/>
						<RoadmapItem
							margin="mr-auto"
							title="Install"
							description="After the supply and delivery of the equipment, the installation phase of the equipment begins using the latest tools by certified trained technicians."
						/>
						<RoadmapItem
							margin="mr-auto"
							title="Test and commission "
							description="The company's calibrated testing equipment is in line with the customer's requirements to reach the desired goal and reach the highest specifications of the supplied devices."
						/>
						<RoadmapItem
							margin="mr-auto"
							title="Handover"
							description="During the project handover phase, the client is given the test reports with the client given the option to be present during the testing step."
						/>
					</div>
					{/* MIDDLE */}
					<div className="roadmap-line md:ml-5 !-ml-0 !-mr-[1px]   min-h-full grid grid-cols-1 grid-rows-6 text-web-gray">
						{/* NUMBERS */}
						<img
							src="/svg/number1.svg"
							className="roadmap-number -ml-4 mt-4 md:mt-0 md:-ml-7 "
							alt=""
						/>
						<img
							src="/svg/number2.svg"
							className="roadmap-number md:mt-[200px]  mt-[230px]  -ml-4 md:-ml-6"
							alt=""
						/>
						<img
							src="/svg/number3.svg"
							className="roadmap-number mt-[445px] md:mt-[380px] -ml-4 md:-ml-6"
							alt=""
						/>
						<img
							src="/svg/number4.svg"
							className="roadmap-number mt-[500px] md:mt-[700px] -ml-[40px] md:-ml-[70px] "
							alt=""
						/>
						<img
							src="/svg/number5.svg"
							className="roadmap-number md:mt-[900px] mt-[700px] -ml-[40px] md:-ml-[70px]"
							alt=""
						/>
						<img
							src="/svg/number6.svg"
							className="roadmap-number mt-[1050px] md:mt-[1090px] -ml-[40px] md:-ml-[70px]"
							alt=""
						/>
					</div>
					{/* RIGHT */}
					<div className="flex flex-col space-y-10 sm:!ml-[70px] !ml-1">
						<RoadmapItem
							margin=""
							title="Client inquiry "
							description="Collect the information from client, visit the site, study drawings and study the specification required for the project."
						/>
						<RoadmapItem
							margin="ml-auto"
							title="Design"
							description="The next step is to give the client a design by our certified engineers commensurate with the specifications and proposed budget of the project."
						/>
						<RoadmapItem
							margin="ml-auto"
							title="Supply"
							description="Ensure that the customer is given options to choose the product from within our partners while making sure that the products are supplied through the authorized channels while adhering to the duration of the supply."
						/>
						<img
							src="/jpg/roadmap2.jpg"
							className="row-span-3 ml-auto md:w-[80%] hover:scale-110 transition-all duration-300"
							alt=""
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Support;
