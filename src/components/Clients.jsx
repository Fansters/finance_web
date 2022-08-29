import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
	<section className={`${styles.flexCenter} my-4`}>
		<div className={`${styles.flexCenter} flex-wrap w-full`}>
			{clients.map((client) => (
				<div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[12rem] min-w-[7.5rem]`}>
					<img src={client.logo} alt='client' className='sm:w-[12rem] w-[6.25rem] object-contain ' />
				</div>
         ))}
		</div>
	</section>
);
export default Clients;
