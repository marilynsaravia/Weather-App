// components/Search.jsx
import React from 'react';

import getImageUrl from '../assets/logo.png';

const Search = ({ location, setLocation, searchLocation }) => {
  return (
    <div className='flex w-full justify-center items-center flex-wrap'>
      <img className='w-28' src={getImageUrl} alt='Logotipo' />
    
        <input
          className='py-3 px-6 w-[400px] text-lg rounded-3xl border border-pink-100 placeholder:text-gray-200 focus:outline-none shadow-md'
          placeholder='Escriba una ciudad'
          type='text'
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
        />
      </div>
   
  );
};

export default Search;
