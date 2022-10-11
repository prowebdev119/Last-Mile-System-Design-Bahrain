import { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import BurgerMenu from './BurgerMenu';
import SolutionItem from './SolutionItem';

const Header: React.FC<{ selected: string; isHome?: boolean }> = ({
	selected,
	isHome = false,
}) => {
	const [menuActive, setMenuActive] = useState(false);
	return (
		<div className="md:absolute top-0 z-40 w-full">
			{/* HEADER */}
			<div
				className={`w-full text-[#343A40] bg-white flex shadow-sm items-center justify-center  roboto `}
			>
				<div className="flex flex-row min-w-[90%] max-w-full items-center justify-between">
					{/* LOGO */}
					<div className="text-[#DD9933] roboto text-xl font-bold">
						<a href="/">
							<img src="/png/logo.png" className="w-[80px]" alt="" />
						</a>
					</div>
					{/* NAVBAR */}
					<div className="flex lg:hidden relative my-5">
						<BurgerMenu selected={selected} />
					</div>
					<div className="hidden py-5 md:flex flex-col md:flex-row space-y-5 mt-5 md:space-y-0 md:mt-0 items-center md:space-x-6 text-web-gray font-thin roboto">
						<a href="/" className={selected == 'home' ? 'selected' : ''}>
							Home
						</a>
						<a href="/about-us" className={selected == 'about' ? 'selected' : ''}>
							About Us
						</a>
						<a href="/solutions" className={selected == 'solutions' ? 'selected' : ''}>
							Our Solutions
						</a>
						{/* <div
							onClick={() => setMenuActive(menuActive => !menuActive)}
							className={`flex items-center cursor-pointer ${
								selected === 'solutions' ? 'selected' : ''
							}`}
						>
							<span className={menuActive ? 'text-[#DD9933]' : 'text-white'}>
								Our Solutions
							</span>
							{menuActive ? (
								<MdOutlineKeyboardArrowUp className="w-5 h-6 fill-[#DD9933]" />
							) : (
								<MdOutlineKeyboardArrowDown className="w-5 h-6" />
							)}
						</div> */}
						<a href="/services" className={selected == 'services' ? 'selected' : ''}>
							Support & Services
						</a>
						<a href="/clients" className={selected == 'clients' ? 'selected' : ''}>
							Our Clients
						</a>
						<a href="/contact-us" className={selected == 'contact' ? 'selected' : ''}>
							Contact Us
						</a>
					</div>
				</div>
			</div>

			{/* MENU
			<div
				className={`${
					menuActive ? 'flex' : 'hidden'
				} items-center justify-center py-6 md:pl-20 bg-[#343A40] border-t`}
			>
				<div className="flex flex-wrap items-center justify-center space-y-5 w-[80%]">
					<SolutionItem
						imgName="radio"
						text="Radio and Telecommunication"
						path="radio-and-telecommunication"
					/>
					<SolutionItem
						imgName="server"
						text="Switching and Data Center"
						path="switching-and-data-center"
					/>
					<SolutionItem
						imgName="network"
						text="Network Infrastructure Cabling"
						path="network-infrastructure-cabling"
					/>
					<SolutionItem
						imgName="network"
						text="Centralized and IP TV"
						path="centralized-and-ip-tv"
					/>
					<SolutionItem
						imgName="security"
						text="Security and Surveillance"
						path="security-and-surveillance"
					/>
					<SolutionItem
						imgName="audio"
						text="Audio Visual and Sound Systems"
						path="audio-visual-and-sound-systems"
					/>
				</div>
			</div> */}
		</div>
	);
};

export default Header;
