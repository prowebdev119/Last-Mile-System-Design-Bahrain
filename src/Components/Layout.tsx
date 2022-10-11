import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{
	children: React.ReactNode;
	title: string;
	description: string;
	selected: string;
}> = ({ children, title = '', description = null, selected }) => {
	return (
		<div>
			<Header selected={selected} />

			{/* Main */}
			<div className="flex mt-[50px] md:mt-[70px] flex-col roboto w-full md:items-start items-center md:max-w-7xl mx-auto">
				{/* Top Title */}
				<div
					className={`xl:items-start items-center w-full  flex flex-col text-web-gray font-bold ${
						selected === 'contact' ? 'pb-[6px] md:pb-3' : 'pb-5'
					}`}
				>
					<div className="pt-10 text-3xl md:text-[40px]">{title}</div>
					{description && (
						<div className="text-xs sm:text-sm whitespace-nowrap mx-3 md:mx-0 md:text-xl text-web-gray mt-1">
							{description}
						</div>
					)}
					<img
						src="/svg/headerDivider.svg"
						className={`absolute left-0 mt-20 -z-10 w-full  fill-[#DD9933] ${
							description === '' ? 'mt-20' : 'mt-[110px]'
						}`}
						alt=""
					/>
				</div>

				{children}
			</div>
			<Footer selected={selected} />
		</div>
	);
};

export default Layout;
