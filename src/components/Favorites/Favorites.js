import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Favorites.css';
import { Box, Grid } from '@mui/material';
import FavoriteCards from './FavoriteCards';

const Favorites = ({favorite, id, key, setFavorites, handleRemove}) => {
//     const navigate = useNavigate();

//     const handleNavigateBack = () => {
//         navigate("/");
// }
  return (
    <>
    
    <Box>
          <Grid>
            <FavoriteCards favorite={favorite} id={id} setFavorites={setFavorites} handleRemove={handleRemove}/>
          </Grid>
</Box>
    
    </>
  )
}

export default Favorites
