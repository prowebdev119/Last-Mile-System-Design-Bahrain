import React from 'react';
import Layout from '../Components/Layout';

const Solutions = () => {
	return (
		<Layout title="Our Solutions" description="" selected="solutions">
			{/* MAIN */}
			<div className="mt-20 flex flex-col space-y-[40px] md:space-y-[100px] w-full">
				{/* CARDS */}
				<div className="solution-card">
					{/* CARD-IMAGE */}
					<div className="solution-card-image">
						<img src="/png/solution1.png" alt="" />
						<img src="/png/solution2.png" alt="" />
					</div>
					{/* CARD-MENU */}
					<div className="solution-card-menu">
						{/* TITLE */}
						<div className="solution-card-title">Radio and Telecommunication</div>
						{/* CARD-ITEMS */}
						<div className="solution-card-items">
							<div className="solution-card-item">
								Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)
							</div>
							<div className="solution-card-item">Telephone Switch (PABX)</div>
							<div className="solution-card-item">Call Centers</div>
							<div className="solution-card-item">Optical Transport Network</div>
						</div>
						{/* BUTTON */}
						<div className="solution-card-button">
							<a href="#">Contact Us</a>
						</div>
					</div>
				</div>

				{/* 2 */}
				<div className="solution-card">
					{/* CARD-MENU */}
					<div className="solution-card-menu">
						{/* TITLE */}
						<div className="solution-card-title">Switching and Data Center</div>
						{/* CARD-ITEMS */}
						<div className="solution-card-items">
							<div className="solution-card-item">Local Area Network (LAN)</div>
							<div className="solution-card-item">Wide Area Network (WAN)</div>
							<div className="solution-card-item">Wireless LAN – WiFi</div>
							<div className="solution-card-item">Network and information Security</div>
							<div className="solution-card-item">Cloud Security</div>
							<div className="solution-card-item">FTTH Network Solutions</div>
						</div>
						{/* BUTTON */}
						<div className="solution-card-button">
							<a href="#">Contact Us</a>
						</div>
					</div>

					{/* CARD-IMAGE */}
					<div className="solution-card-image right">
						<img src="/png/solution3.png" alt="" />
						<img src="/png/solution4.png" alt="" />
					</div>
				</div>

				{/* 3 */}
				{/* CARDS */}
				<div className="solution-card">
					{/* CARD-IMAGE */}
					<div className="solution-card-image w-[300px] lg:w-auto">
						<img src="/png/solution5.png" alt="" />
						<img src="/png/solution6.png" alt="" />
					</div>
					{/* CARD-MENU */}
					<div className="solution-card-menu">
						{/* TITLE */}
						<div className="solution-card-title">Network Infrastructure Cabling</div>
						{/* CARD-ITEMS */}
						<div className="solution-card-items">
							<div className="solution-card-item">
								Cable splicing, Cable termination and testing (copper and fiber)
							</div>
							<div className="solution-card-item">Cableway and wire way construction</div>
							<div className="solution-card-item">Conduit construction</div>
							<div className="solution-card-item">
								Horizontal & Backbone cable pulling (copper & fiber)
							</div>
							<div className="solution-card-item">
								Installation of grounding bars, equipment racks, cabinets, raised floor
								and patch panels
							</div>
						</div>
						{/* BUTTON */}
						<div className="solution-card-button">
							<a href="#">Contact Us</a>
						</div>
					</div>
				</div>

				{/* 4 */}
				<div className="solution-card">
					{/* CARD-MENU */}
					<div className="solution-card-menu">
						{/* TITLE */}
						<div className="solution-card-title">Centralized and IP TV</div>
						{/* CARD-ITEMS */}
						<div className="solution-card-items">
							<div className="solution-card-item">SMATV</div>
							<div className="solution-card-item">IPTV</div>
							<div className="solution-card-item">Broadcast TV</div>
							<div className="solution-card-item">IP MPEG 4 IP Set Top box</div>
							<div className="solution-card-item">Video on Demand Servers</div>
						</div>
						{/* BUTTON */}
						<div className="solution-card-button">
							<a href="#">Contact Us</a>
						</div>
					</div>

					{/* CARD-IMAGE */}
					<div className="solution-card-image right">
						<img src="/png/solution7.png" alt="" />
						<img src="/png/solution8.png" alt="" />
					</div>
				</div>

				{/* 5 */}
				{/* CARDS */}
				<div className="solution-card">
					{/* CARD-IMAGE */}
					<div className="solution-card-image">
						<img src="/png/solution9.png" alt="" />
						<img src="/png/solution10.png" alt="" />
					</div>
					{/* CARD-MENU */}
					<div className="solution-card-menu">
						{/* TITLE */}
						<div className="solution-card-title">Security and Surveillance</div>
						{/* CARD-ITEMS */}
						<div className="solution-card-items">
							<div className="solution-card-item">Security Cameras</div>
							<div className="solution-card-item">Recording Solutions</div>
							<div className="solution-card-item">Software Solutions</div>
							<div className="solution-card-item">Intercom Solutions</div>
							<div className="solution-card-item">Access Doors Solutions</div>
						</div>
						{/* BUTTON */}
						<div className="solution-card-button">
							<a href="#">Contact Us</a>
						</div>
					</div>
				</div>

				{/* 6 */}
				{/* CARDS */}
				<div className="solution-card">
					{/* CARD-MENU */}
					<div className="solution-card-menu">
						{/* TITLE */}
						<div className="solution-card-title">Audio Visual and Sound Systems</div>
						{/* CARD-ITEMS */}
						<div className="solution-card-items">
							<div className="solution-card-item">Public Address</div>
							<div className="solution-card-item">Sound Systems</div>
							<div className="solution-card-item">Signage Systems</div>
							<div className="solution-card-item">Interactive Boards</div>
							<div className="solution-card-item">IP Clock Systems</div>
							<div className="solution-card-item">Projectors and Screens</div>
						</div>
						{/* BUTTON */}
						<div className="solution-card-button">
							<a href="#">Contact Us</a>
						</div>
					</div>

					{/* CARD-IMAGE */}
					<div className="solution-card-image right">
						<img src="/png/solution11.png" alt="" />
						<img src="/png/solution12.png" alt="" />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Solutions;
