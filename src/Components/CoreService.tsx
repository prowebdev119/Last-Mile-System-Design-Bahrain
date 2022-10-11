import React from 'react';

const CoreService: React.FC<{ imageUrl: string; title: string }> = ({
	imageUrl,
	title,
}) => {
	return (
		<div className="core-service-card">
			{/* INNER */}
			<div className="core-service-inner w-[300px] md:w-[400px] shadow-lg bg-white shadow-gray-500 z-40 mb-10 flex flex-col justify-around md:mx-10 items-center h-[300px] md:h-[400px] rounded-lg">
				<img src={`/svg/${imageUrl}.svg`} alt="" />
				<div className="text-web-gray text-lg md:text-2xl font-bold">{title}</div>
			</div>
		</div>
	);
};

export default CoreService;
