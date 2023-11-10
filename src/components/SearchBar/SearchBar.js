import React from 'react';
import FormControl from '@mui/material/FormControl';
import { Form } from 'react-router-dom';
import { Button, Input } from '@mui/material';
import './SearchBar.css';

const SearchBar = ({handleSubmit ,handleSearch, query}) => {
  return (
    <>
      <input 
      type="text"
      placeholder='Enter Dish'
      value={query}
      onChange={handleSearch}
      className='search-bar'
      />
      <div className='search' onClick={handleSubmit}>Search</div>
    </>
  )
}

export default SearchBar
