import React, { useState } from 'react';
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import BookCard from './BookCard.js';
import Footer from './Footer.js';

function App() {

  // States
  const [maxResults] = useState(40);
  const [startIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
	const [cards, setCards] = useState([]);
	
  // Handle Search
	const handleSubmit = () => {
    setLoading(true);
    if (maxResults > 40 || maxResults < 1) {
      toast.error('max results must be between 1 and 40');
    } else {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
        )
        .then(res => {
          if (startIndex >= res.data.totalItems || startIndex < 1) {
            toast.error(
              `max reults must be between 1 and ${res.data.totalItems}`
            );
          } else {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
            }
          }
        })
        .catch(err => {
          setLoading(true);
          console.log(err.response);
        });
    }
	};
	
  // Header
  const mainHeader = () => {
    return (
      <div className='main-image d-flex justify-content-center align-items-center flex-column'>
        <h1 className='display-2 text-center text__style'>FlowerBook</h1>     

				<div class="input-group mb-3">
					<input 
						type="text" 
						class="form-control input__style" 
						value={query}
						onChange={e => setQuery(e.target.value)} 
						placeholder="Cerca libri" 
						aria-describedby="button-addon2"/>
					<div class="input-group-append">
						<button onClick={handleSubmit} class="btn btn-info" type="button" id="button-addon2">
						<i className='fas fa-search'></i>
						</button>
					</div>					
				</div>
        
      </div>
    );
  };

  const handleCards = () => { 
		const items = cards.map((item, i) => {
			let thumbnail = '';
			if (item.volumeInfo.imageLinks) { thumbnail = item.volumeInfo.imageLinks.thumbnail; }
			return (
				<div className='' key={item.id}>
					<BookCard
						thumbnail={thumbnail}
						title={item.volumeInfo.title}
						authors={item.volumeInfo.authors}
						infoLink={item.volumeInfo.infoLink}
					/>
				</div>
			);
		});
		return (
			<div className='container my-5'>
				<div className='row response__container'>{items}</div>
			</div>
		);    
	};
	
  return (
    <div className='w-100 h-100 page-container'>
      {mainHeader()}
      {handleCards()}
			{Footer()}
    </div>
  );
}

export default App;