import React from 'react';
import './App.css';

const BookCard = ({thumbnail, title, authors, infoLink}) => {

	// States
  return (
    <div className='card-container'>
			<div className="card-img__container">
				<img top className="card-img" src={thumbnail} alt={title} />
			</div>
      <div className="text__container">
        <h3 className='card-title'>Titolo: {title}</h3>
				<h3 className='card-author'>Author: {authors}</h3>		
				<a href={infoLink}
			 		className='btn-link'
					color='default'
					type='button'
					target='_blank'
					rel='noopener noreferrer'
				>Info Link             
        </a>
      </div>          
    </div>
  );
};

export default BookCard;