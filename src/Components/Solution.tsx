import React from 'react';

const Solution: React.FC<{ solution: { img: string; title: string; text: string } }> = ({
	solution,
}) => {
	return (
		<div className="flex flex-col md:flex-row items-center md:space-x-[30px] text-web-gray text-center ">
			{/* IMAGE */}
			<div className="w-[50%] block">
				<img src={`/png/${solution.img}.png`} alt="" />
			</div>
			{/* LEFT */}
			<div className="flex flex-col items-center md:items-start   my-5 ">
				<div className="text-2xl font-bold w-[85%] md:w-[70%]">{solution.title}</div>
				<div className="font-thin mt-5 md:mt-10 w-[85%] md:w-[70%]">{solution.text}</div>
			</div>
		</div>
	);
};

export default Solution;
