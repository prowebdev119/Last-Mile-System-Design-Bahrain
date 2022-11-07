import React, { useState } from 'react';
import Header from '../Components/Header';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import CoreService from '../Components/CoreService';
import Footer from '../Components/Footer';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import SwiperCore, { Autoplay } from 'swiper';
const CONTENT = [
	{
		title: 'Security Solutions',
		description: 'Cybersecurity services for enterprise',
		button: 'DISCOVER MORE',
	},
	{
		title: 'Internet Connectivity',
		description: 'Cybersecurity services for enterprise 2',
		button: 'DISCOVER MORE',
	},
	{
		title: 'Switching & Data Centers',
		description: 'Cybersecurity services for enterprise 3',
		button: 'DISCOVER MORE',
	},
];

const Home = () => {
	SwiperCore.use([Autoplay]);

	const maxNumber = CONTENT.length - 1;
	const [currentText, setCurrentText] = useState(0);
	const [currentStyle, setCurrentStyle] = useState('');

	const increaseText = (num: any) => {
		setCurrentStyle('slider-changes');

		setTimeout(() => {
			setCurrentStyle('slider-changes2');
			if (currentText >= maxNumber) {
				setCurrentText(0);
			} else {
				setCurrentText(currentText => currentText + num);
			}
		}, 1000);
	};

	const decreaseText = (num: any) => {
		setCurrentStyle('slider-changes');

		setTimeout(() => {
			setCurrentStyle('slider-changes2');
			if (currentText == 0) {
				setCurrentText(maxNumber);
			} else {
				setCurrentText(currentText => currentText - num);
			}
		}, 1000);
	};

	return (
		<div>
			<Header selected="home" isHome={true} />
			{/* TOP SLIDER */}
			{/* <img
				src={`/gif/video${currentText + 1}.gif`}
				className={`absolute contain t-0 l-0 md:h-full w-full -z-2 ${currentStyle}`}
				alt=""
			/> */}
			{currentText === 0 && (
				<video
					playsInline
					autoPlay
					loop
					muted
					className={`absolute t-0 l-0  w-full  -z-2 ${currentStyle}`}
				>
					<source
						src={`/mp4/video1.mp4`}
						className=" left-0 absolute contain t-0 l-0 md:h-full w-full -z-2"
						type="video/mp4"
					/>
				</video>
			)}

			{currentText === 1 && (
				<video
					playsInline
					autoPlay
					loop
					muted
					className={`absolute t-0 l-0  w-full -z-2 ${currentStyle}`}
				>
					<source
						src={`/mp4/video2.mp4`}
						className={`left-0 absolute contain t-0 l-0 md:h-full w-full -z-2 ${currentStyle}`}
						type="video/mp4"
					/>
				</video>
			)}

			{currentText === 2 && (
				<video
					playsInline
					autoPlay
					loop
					muted
					className={`absolute t-0 l-0  w-full -z-2 ${currentStyle}`}
				>
					<source
						src={`/mp4/video3.mp4`}
						className=" left-0 absolute contain t-0 l-0 md:h-full w-full -z-2"
						type="video/mp4"
					/>
				</video>
			)}

			<div className="md:h-[100vh] relative max-w-[100vw]">
				{/* VIDEO */}
				<div className="md:h-[100vh] w-full flex items-center">
					{/* SLIDER */}
					<div className="w-full h-1/2 space-x-5 mt-3 md:mt-10  flex items-center justify-between mx-10 text-white ">
						<div>
							<IoIosArrowBack className="w-10 h-10 " onClick={() => decreaseText(1)} />
						</div>
						{/* CONTENT */}
						<div
							className={`flex-grow sm:pl-[50px] md:pl-[100px]   md:mt-[20%] mt-[10%]    w-full  flex flex-col space-y-2 sm:space-y-10  md:space-y-20 ${currentStyle}`}
						>
							<div className="flex flex-col md:space-y-3  ">
								<div className="text-2xl md:text-[80px] w-full font-semibold md:font-bold text-[#DD9933] ">
									{CONTENT[currentText].title}
								</div>
								<div className="md:text-2xl  md:font-bold w-full   md:pt-5 md:tracking-[5px]">
									{CONTENT[currentText].description}
								</div>
							</div>
							<button className=" w-full sm:w-[50%] md:w-[15%] py-2 text-xs md:text-md md:py-3 rounded shadow-[#dd9933] shadow-md border border-[#dd9933] hover:bg-white hover:text-[#DD9933] transition duration-400 md:font-semibold bg-[#DD9933] ">
								{CONTENT[currentText].button}
							</button>
						</div>
						<div className="cursor-pointer" onClick={() => increaseText(1)}>
							<IoIosArrowForward className="w-10 h-10" />
						</div>
					</div>
				</div>
			</div>
			{/* SERVICES */}
			<div className="mt-[80px] sm:mt-[200px]  flex flex-col space-y-10  items-center b w-full core-services lg:mb-20">
				<div className="text-3xl md:text-5xl text-web-gray font-bold mb-5 md:mb-20 ">
					Our Core Services
				</div>

				{/* CARDS */}

				<div className=" relative flex flex-wrap container  justify-center">
					<img
						src="/svg/our-core2.svg"
						className="absolute hidden md:block  -z-30 -top-10 left-0"
						alt=""
					/>
					<img
						src="/svg/our-core1.svg"
						className="absolute hidden md:block -z-30 -bottom-10 right-0"
						alt=""
					/>
					<CoreService imageUrl="core1" title="Audio Video Solutions" />
					<CoreService imageUrl="core2" title="Security and Surveillance " />
					<CoreService imageUrl="core3" title="Radio and Microwave " />

					<CoreService imageUrl="core4" title="IT Project & Support" />
					<CoreService imageUrl="core5" title="Internet Connectivity" />
					<CoreService imageUrl="core6" title="Hardware & Software" />

					<CoreService imageUrl="core7" title="Voice & Phones Solution" />
					<CoreService imageUrl="core8" title="Systems Maintenance" />
					<CoreService imageUrl="core9" title="Wifi Solutions " />
				</div>
			</div>

			{/* OUR PARTNERS */}
			<div className="container relative mx-auto flex flex-col space-y-3">
				{/* TEXT */}
				<img
					src="/svg/headerDivider.svg"
					className="absolute left-0 pt-5 -z-10 w-full  fill-[#DD9933]"
					alt=""
				/>
				<div className="flex flex-col space-y-3 pb-10 pt-5 text-web-gray items-center">
					<div className="text-5xl font-bold">Our Partners</div>
					<div className="hidden md:block text-xl font-semibold">
						Our Clients speaks better than words!
					</div>
				</div>
				{/* SLIDER */}
				<div className="mx-10">
					<Swiper
						autoplay={{
							delay: 500,
						}}
						freeMode={true}
						grabCursor={true}
						modules={[FreeMode]}
						className=" flex items-center h-full justify-center"
						slidesPerView={4}
						spaceBetween={5}
						breakpoints={{
							0: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							480: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 10,
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 10,
							},
						}}
					>
						<SwiperSlide className="flex items-center m-auto  min-h-full justify-center">
							<a href="https://www.huawei.com/en/?ic_medium=direct&ic_source=surlent">
								<img src={`/png/partner3.png`} alt="" />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a href="https://www.commscope.com/">
								<img src={`/svg/partner1.svg`} alt="" />
							</a>
						</SwiperSlide>
						<SwiperSlide className="">
							<a href="https://www.hpe.com/us/en/home.html">
								<img src={`/svg/partner2.svg`} className="" alt="" />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a href="https://www.prometheanworld.com/au/">
								<img src={`/svg/partner4.svg`} alt="" />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a
								href="https://www.juniper.net/us/en.html
							"
							>
								<img src={`/svg/partner5.svg`} alt="" />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a href="https://www.cisco.com/">
								<img src={`/svg/partner6.svg`} className="pl-3 md:pl-5" alt="" />
							</a>
						</SwiperSlide>
						<SwiperSlide>
							<a href="https://www.commscope.com/">
								<img src={`/svg/partner7.svg`} alt="" />
							</a>
						</SwiperSlide>
					</Swiper>
				</div>
				{/* SHOW MORE */}
				<div className="pb-10 pt-5 cursor-pointer font-bold text-[#DD9933] flex space-x-3 items-center justify-center w-full">
					<div>Show More</div>
					<div>
						<AiOutlineArrowRight />
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
