import React from "react";

// ? React Icons
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { BsMailbox } from 'react-icons/bs';

// ? SCSS
import '../Styling/Navbar.scss';

const Navbar = () => {

	return (
		<>
			<div className='nav-wrapper'>

				<div className='nav-name'>
					<span>
						<span className='first-letter'>P</span>RASHANTH
					</span>			
				</div>

				<div className='nav-links'>
					<p>
						<a 
							href='tel:+919944411899'
							className='phone-no'
						>
							<IoPhonePortraitOutline className='phone-icon' /> +91 9944411899
						</a>
						<span className='slash'>/</span>
						<a
							href='mailto:prashanth5454@gmail.com'
							className='email-address'
						>
							<BsMailbox className='mail-icon'/> prashanth5454@gmail.com
						</a>
					</p>	
				</div>



			</div>
			<div className='ruler-section' >
				<div className='white-ruler' />
			</div>
		</>
	)

};

export default Navbar;