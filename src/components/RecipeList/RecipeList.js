import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './RecipeList.css';
import RecipeCards from './RecipeCards';


const RecipeList = ({id, recipe, addToFavorites}) =>  {
  return (
<Box>
          <Grid>
            <RecipeCards recipe={recipe} id={id} addToFavorites={addToFavorites} />
          </Grid>
</Box>

  );
}

export default RecipeList;