import React from 'react';

const ServiceItem: React.FC<{ title: string; text: string; img: string }> = ({
	title,
	text,
	img,
}) => {
	return (
		<div className="core-service-card">
			<div className="flex flex-col space-y-3 rounded-lg shadow-xl  text-web-gray core-service-inner">
				<div className="w-full">
					<img src={`/jpg/${img}.jpg`} className="w-full rounded-lg" alt="" />
				</div>
				<div className="font-bold text-lg text-center  w-[90%] mx-auto mt-4">{title}</div>
				<div className="font-thin text-center w-[90%] mx-auto pb-5 fancy-text">
					{text}
				</div>
			</div>
		</div>
	);
};

export default ServiceItem;
