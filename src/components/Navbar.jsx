import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className=' w-full flex py-6 justify-between items-center navbar '>
			<img src={logo} alt='finance' className='w-[7.75rem] h-[2rem]' />

			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-normal cursor-pointer text-[1rem] ${
							index === navLinks.length - 1 ? `mr-0` : `mr-10`
						} text-white `}
					>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>
			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='w-[1.75rem] h-[1.75rem] object-contain'
					onClick={() => setToggle((prev) => !prev)}
				/>
				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-4 min-w-[8.75rem] rounded-xl sidebar`}
				>
					<ul className='list-none flex flex-col justify-end items-center flex-1'>
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer text-[1rem] ${
									index === navLinks.length - 1 ? `mr-0` : `mb-4`
								} text-white `}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
