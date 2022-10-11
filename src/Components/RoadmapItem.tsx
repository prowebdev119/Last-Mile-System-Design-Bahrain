import React from 'react';

const RoadmapItem: React.FC<{ title: string; description: string; margin: string }> = ({
	title,
	description,
	margin,
}) => {
	return (
		<div
			className={`roadmap-item mb-5 w-[150px] sm:w-[550px]  row-span-1 rounded-lg p-5 flex flex-col md:space-y-5 md:mt-0 text-web-gray mx-auto md:${margin}`}
		>
			<div className="text-sm md:text-xl font-bold fancy-text">{title}</div>
			<div className="font-thin md:text-base text-xs fancy-text">{description}</div>
		</div>
	);
};

export default RoadmapItem;
