import Layout from '../Components/Layout';

const AboutUs = () => {
	return (
		<Layout
			selected="about"
			title="About Us"
			description="MAINTAINING A MIX OF SME AND ENTERPRISE CLIENTS"
		>
			<div className="flex flex-col space-y-10">
				<div className="mt-14  flex justify-center lg:justify-between">
					{/* LEFT */}
					<div className="flex flex-col  w-[80%] lg:items-start items-center md:w-[50%]">
						<div className="text-web-gray text-xl md:text-3xl mb-7 font-bold">
							Our Skills & Expertise
						</div>
						<div className="font-thin leading-7">
							LMT has been in operation in the Saudi Arabia since 2007. In this time we
							have developed a deep understanding of the region and have witnessed many of
							the significant developments that have taken place within the communications
							and telecommunications sectors, indeed we have been a contributor to many of
							them. We now employ over 20 full time employees and have our main office in
							Eastern Province Al Khobar and have successfully delivered projects
							throughout the region including many of market sectors.
							<span className=" block mt-5">
								LMT supplies a wide range of network infrastructure design and
								installation services to system integrator, telecommunications operators,
								as well as to large enterprises and government organizations. This also
								includes Fiber Transmission, GEPON, Ethernet Switches, Smart Wireless LAN
								systems, IP Telephony and converged solutions.
							</span>
						</div>
					</div>

					{/* RIGHT */}
					<div className="hidden lg:block">
						<img src="/png/about-us.png" className="-mt-[150px]" alt="" />
					</div>
				</div>

				{/* BOTTOM PART */}
				<div className="flex flex-col  pt-10">
					{/* TOP */}
					{/* <div className="flex lg:flex-row flex-col-reverse items-center space-x-10">
						<img
							src="/svg/our-mission.svg"
							className="w-full lg:w-[40%]  -ml-10 mb-10 lg:mb-0 "
							alt=""
						/>
						<div className="text-web-gray">
							<div className=" text-2xl md:text-4xl font-bold mb-2 md:mb-[30px]">
								Our Mission
							</div>
							<div className="font-thin leading-9 mb-5 md:mb-0">
								Our mission is to provide solutions, the latest technologies and optimal
								services to our customers, while growing our business using direct and
								indirect distribution to sell our advanced security/IT solutions and other
								low current systems.
							</div>
						</div>
					</div> */}

					{/* BOTTOM */}
					<div className="flex flex-col lg:flex-row items-center lg:space-x-10   w-full">
						<div className="text-web-gray ml-10 lg:ml-0">
							<div className="text-2xl md:text-4xl  font-bold  mb-2 md:mb-[30px]">
								Our Vision
							</div>
							<div className="font-thin leading-9">
								Our vision is to pull the company into the future to take an advanced
								position among telecommunications solutions companies within the Arabian
								Gulf.
							</div>
						</div>
						<img src="/svg/our-vision.svg" alt="" className="mt-10 lg:mt-0" />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default AboutUs;
