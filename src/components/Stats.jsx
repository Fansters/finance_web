import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
	<section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 `}>
		{stats.map((stat) => (
			<div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
				<h4 className='font-poppins font-semibold xs:text-[2.5rem] text-[1.875rem] xs:leading-[53px] leading-[43px] text-white'>
					{stat.value}
				</h4>
				<p className='font-poppins font-normal xs:text-[1.25rem] text-[.9375rem] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
					{stat.title}
				</p>
			</div>
		))}
	</section>
);
export default Stats;
