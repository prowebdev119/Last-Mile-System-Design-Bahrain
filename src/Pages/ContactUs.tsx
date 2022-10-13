import React from 'react';
import Layout from '../Components/Layout';

const ContactUs = () => {
	return (
		<Layout title="Contact Us" description="" selected="contact">
			{/* MAIN */}

			<div className=" w-full flex  ">
				<div className="h-[120vh] lg:h-[105vh]"></div>
				{/* BG */}
				<img
					src="/svg/contact-bg.svg"
					className="hidden md:block md:absolute -mb-5 right-0  -z-20 "
					alt=""
				/>

				{/* CONTENT */}
				<div className="md:absolute   md:bg-inherit md:pt-0 pt-20 flex flex-col lg:flex-row w-full  left-0 justify-center  h-full items-center">
					{/* FORM */}
					<div className=" md:rounded-xl   px-7 shadow-lg shadow-gray-600 bg-white mx-5 mb-5 md:mx-0 md:mr-20">
						<form action="" className="flex flex-col mx-5 space-y-3 text-web-gray ">
							<div className=" md:text-3xl font-bold mb-3 mt-8 md:my-5">
								Contact Us & Let’s Collaborate!
							</div>

							<div className="flex flex-col space-y-4 contact-form">
								<div className="flex">
									<div className="w-full md:w-1/2 mr-2">
										<label className="contact-label" htmlFor="first-name">
											First Name *
										</label>
										<input
											type="text"
											placeholder="Your first name"
											id="first-name"
											className=""
										/>
									</div>
									<div>
										<label className="contact-label" htmlFor="last-name">
											Last name *
										</label>
										<input type="text" placeholder="Your last name" id="last-name" />
									</div>
								</div>

								<div>
									<label className="contact-label" htmlFor="first-name">
										Email *
									</label>
									<input type="email" placeholder="Your email" id="first-name" />
								</div>

								<div>
									<label className="contact-label" htmlFor="subject">
										Subject *
									</label>
									<input type="text" placeholder="Enter subject" id="subject" />
								</div>

								<div className="flex flex-col space-y-2 w-full">
									<label className="contact-label" htmlFor="message">
										Message *
									</label>
									<textarea
										className="focus:outline-none py-2 px-3 border border-gray-300 rounded-sm resize-none"
										name=""
										id="message"
										cols={20}
										rows={7}
										placeholder="Place your message here"
									></textarea>
								</div>
								<div>
									<button className="mb-10 py-3 rounded-sm text-lg font-bold hover:bg-white hover:text-[#DD9933] transition-all duration-300 w-full border-2 border-[#DD9933] bg-[#DD9933]  text-white">
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
					{/* INFO */}
					<div className="bg-web-gray pt-20 px-5 flex flex-col space-y-[100px] pb-20 md:pb-0">
						<div className="contact-info">
							<img src="/svg/location.svg" className="contact-info-logo" alt="" />
							<div className="contact-info-text">
								<div className="contact-info-title">Address</div>
								<div className="contact-info-description">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor{' '}
								</div>
							</div>
						</div>

						<div className="contact-info bg-web-gray">
							<img src="/svg/email.svg" className="contact-info-logo" alt="" />
							<div className="contact-info-text">
								<div className="contact-info-title">Email</div>
								<div className="contact-info-description">info@lmac-me.com</div>
							</div>
						</div>

						<div className="contact-info">
							<img src="/svg/phone.svg" className="contact-info-logo" alt="" />
							<div className="contact-info-text">
								<div className="contact-info-title">Phone</div>
								<div className="contact-info-description">
									<span>Tel : +966 13 8999927</span>
									<span>Fax : +966 13 8974479</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ContactUs;
