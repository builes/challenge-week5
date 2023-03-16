import { AiFillWindows } from 'react-icons/ai';
import { BsXbox } from 'react-icons/bs';
import { FaPlaystation } from 'react-icons/fa';
import { BsNintendoSwitch } from 'react-icons/bs';
import './icon.scss';

export const Icon = ({ nameIcon }) => {
	return (
		<>
			{nameIcon === 'PC' && <AiFillWindows className='icon' />}
			{nameIcon === 'PlayStation' && <FaPlaystation className='icon' />}
			{nameIcon === 'Xbox' && <BsXbox className='icon' />}
			{nameIcon === 'Nintendo' && <BsNintendoSwitch className='icon' />}
		</>
	);
};
