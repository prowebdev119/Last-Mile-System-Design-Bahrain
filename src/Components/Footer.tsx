import React from 'react';

const Footer: React.FC<{ selected?: string }> = ({ selected }) => {
	return (
		<footer>
			<div
				className={`roboto md:pl-[10vw] bg-web-gray text-white  pb-2 ${
					selected !== 'contact' ? 'mt-20' : ''
				}`}
			>
				{/* TOP MENU */}
				<div className=" flex pt-10 md:flex-nowrap flex-col md:flex-row  justify-start flex-wrap md:ml-0 md:space-x-[10vw] ml-[10vw] ">
					{/* LOGO */}
					<img src="/png/logo.png" className="w-20 h-20 lg:-mr-20 mb-10 " alt="" />
					{/* FIRST COLUMN */}
					<div className="flex flex-col space-y-3 ">
						<div className="font-bold text-xl mb-7">Last Mile Trading</div>
						<div className="flex space-x-2 items-center">
							<img src="/svg/internation.svg" className="footer-svg" alt="" />
							<div>
								<a href="#">Internation / English</a>
							</div>
						</div>
						<div className="flex space-x-2 items-center">
							<img src="/svg/question.svg" className="footer-svg" alt="" />
							<div>
								<a href="#">Help & Support</a>
							</div>
						</div>
					</div>

					{/* SECOND COLUMN */}
					<div className="footer-column mt-10 md:mt-0">
						<div className="footer-title">About</div>
						<div className="footer-link">
							<a href="/about-us">About Us</a>
						</div>
						<div className="footer-link">
							<a href="">How We Work</a>
						</div>
						<div className="footer-link">
							<a href="">Careers</a>
						</div>
						<div className="footer-link">
							<a href="">Stories</a>
						</div>
						<div className="footer-link">
							<a href="">News</a>
						</div>
					</div>

					{/* Third COLUMN */}
					<div className="footer-column">
						<div className="footer-title">Terms</div>
						<div className="footer-link">
							<a href="/privacy">Privacy Policy</a>
						</div>
						<div className="footer-link">
							<a href="/terms">Terms and Conditions</a>
						</div>
						<div className="footer-link">
							<a href="/policy">Copyright Policy</a>
						</div>
					</div>

					{/* Fourth COLUMN */}
					<div className="footer-column">
						<div className="footer-title">Follow Us</div>
						<div className="footer-link">
							<img src="/svg/facebook.svg" className="footer-svg" alt="" />
							<a href="">Facebook</a>
						</div>
						<div className="footer-link">
							<img src="/svg/instagram.svg" className="footer-svg" alt="" />
							<a href="">Instagram</a>
						</div>
						<div className="footer-link">
							<img src="/svg/linkedin.svg" className="footer-svg" alt="" />
							<a href="">Linkedin</a>
						</div>
					</div>
				</div>
				<div className="font-thin mt-7">
					<span>@ 2022 - LAST MILE TRADING | All Right Reserved</span>
				</div>
				{/* Rights Reserved */}
			</div>
		</footer>
	);
};

export default Footer;
