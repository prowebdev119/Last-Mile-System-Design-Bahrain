import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineX } from 'react-icons/hi';
const BurgerMenu: React.FC<{ selected: string }> = ({ selected }) => {
	return (
		<Menu
			right
			width={'50%'}
			customBurgerIcon={<GiHamburgerMenu className="fill-[#DD9933] !w-5 !h-5" />}
			customCrossIcon={<HiOutlineX />}
			className="w-9 h-9"
		>
			<a
				id="home"
				className={`menu-item ${selected === 'home' ? 'menu-selected' : ''}`}
				href="/"
			>
				Home
			</a>
			<a
				id="about"
				className={`menu-item ${selected === 'about' ? 'menu-selected' : ''}`}
				href="/about-us"
			>
				About Us
			</a>
			<a
				id="Our Solutions"
				className={`menu-item ${selected === 'solutions' ? 'menu-selected' : ''}`}
				href="/solutions"
			>
				Our Solutions
			</a>
			<a
				id="services"
				className={`menu-item ${selected === 'services' ? 'menu-selected' : ''}`}
				href="/services"
			>
				Support & Services
			</a>
			<a
				id="Our Clients"
				className={`menu-item ${selected === 'clients' ? 'menu-selected' : ''}`}
				href="/clients"
			>
				Our Clients
			</a>
			<a
				id="contact-us"
				className={`menu-item ${selected === 'contact' ? 'menu-selected' : ''}`}
				href="/contact-us"
			>
				Contact Us
			</a>
		</Menu>
	);
};

export default BurgerMenu;
