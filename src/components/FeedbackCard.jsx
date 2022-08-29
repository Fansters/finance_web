import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
	<div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[23.125rem] md:mr-10 xs:mr-5 mr-0 my-5 feedback-card'>
		<img src={quotes} alt='quotes' className='w-[42px] h-[47px] object-contain' />
		<p className='font-poppins font-normal text-[1.125rem]  leading-[32px] text-white my-10'>{content}</p>

		<div className='flex flex-row '>
			<img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
			<div className='flex flex-col ml-4'>
				<h4 className='font-poppins font-semibold text-[1.25rem]  leading-[32px] text-white'>{name}</h4>
				<p className='font-poppins font-semibold text-[.875rem]  leading-[24px] text-dimWhite '>{title}</p>
			</div>
		</div>
	</div>
);

export default FeedbackCard;
