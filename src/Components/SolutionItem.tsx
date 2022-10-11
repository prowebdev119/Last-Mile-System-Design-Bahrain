import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
const SolutionItem: React.FC<{ imgName: string; text: string; path: string }> = ({
	imgName,
	text,
	path,
}) => {
	return (
		<div className="flex md:w-1/3 flex-col justify-start p-3 w-full h-[150px]">
			<div className="flex flex-col items-start text-right">
				<img src={`/svg/${imgName}.svg`} className="w-12 h-12  mb-4" alt={path} />
				<div className="flex items-center space-x-2 text-center">
					<a href={`/${path}`} className="text-left text-white  text-lg font-semibold ">
						{text}
					</a>
					<RiArrowRightLine className="w-6 h-6 fill-[#DD9933]" />
				</div>
			</div>
		</div>
	);
};

export default SolutionItem;
