import React from 'react';
import './App.css';

const Footer = () => {
	return (
		<div className='main-footer'>
			<div className='container'>
				<div className='row'>
					<div className='col'>	
						<p><i class="fas fa-dragon"></i> DragonBook</p>				
					</div>	
					<div className='col'>
						<p><i class="far fa-copyright"></i> 2020 All right reserved</p>
					</div>
					<div className='col'>
						<p>Fatto con <i class="fas fa-heart"></i> e <i class="fas fa-mug-hot"></i> per amatori dei <i class="fas fa-book"></i></p>
					</div>			
				</div>
			</div>
		</div>
	)
}
export default Footer;