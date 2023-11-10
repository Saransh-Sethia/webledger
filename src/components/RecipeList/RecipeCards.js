import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import './RecipeList.css';
import { useNavigate } from 'react-router-dom';

const RecipeCards = ({recipe, id, addToFavorites}) => {

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate(`/recipe/${recipe.idMeal}`)
  }
  return (
    <Card sx={{  width:'250px', marginTop:'15px', marginRight:'15px' }}>
      <CardMedia
      className='image'
        component="img"
        alt="green iguana"
        image={recipe.strMealThumb}
      />
              <Typography variant="h6" color="text.secondary" className="category">
{recipe.strCategory}
        </Typography>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='title' >
          {recipe.strMeal}
        </Typography>

      </CardContent>
      <CardActions className='footer-buttons'>
        <Button size="small" className='button' onClick={()=>handleAdd()}>Ingredients</Button>
        <Button size="small" className='button' onClick={()=>addToFavorites(recipe)}>Favorites</Button>
      </CardActions>
    </Card>
  );
}

export default RecipeCards;