import React from 'react';
import Layout from './Layout';
import Solution from './Solution';

const SOLUTIONS = [
	[
		{
			img: 'radio1',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'radio2',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'radio3',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'radio4',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
	],
	[
		{
			img: 'server1',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'server2',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'server3',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'server4',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'server5',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'server6',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
	],
	[
		{
			img: 'network1',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'network2',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'network3',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'network4',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'network5',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
	],
	[
		{
			img: 'c1',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'c2',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'c3',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'c4',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'c5',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
	],
	[
		{
			img: 'security1',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'security2',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'security3',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'security4',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'security5',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
	],
	[
		{
			img: 'audio1',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'audio2',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'audio3',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'audio4',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'audio5',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
		{
			img: 'audio6',
			title: 'Microwave Radio (Smart Zone, Marine, TETRA, UHF/VHF)',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		},
	],
];

const SolutionCategory: React.FC<{ id: number; title: string; description: string }> = ({
	id,
	title,
	description = '',
}) => {
	return (
		<Layout selected="solutions" title={title} description={description}>
			<div className="mt-20 flex flex-col space-y-10">
				{SOLUTIONS[id].map(solution => (
					<Solution solution={solution} />
				))}
			</div>
		</Layout>
	);
};

export default SolutionCategory;
