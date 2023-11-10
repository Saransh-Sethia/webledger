import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import "./Favorites.css";
import { useNavigate } from "react-router-dom";

const FavoriteCards = ({ favorite, id, addToFavorites, setFavorites, handleRemove }) => {


  return (
    <Card sx={{ width: "250px", marginTop: "15px", marginRight: "15px" }}>
      <CardMedia
        className="image"
        component="img"
        alt="green iguana"
        image={favorite.strMealThumb}
      />
      <Typography variant="h6" color="text.secondary" className="category">
        {favorite.strCategory}
      </Typography>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="title">
          {favorite.strMeal}
        </Typography>
      </CardContent>
      <CardActions className="footer-buttons">
        {/* <Button size="small" className='button' onClick={()=>handleAdd()}>Ingredients</Button> */}
        <Button size="small" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} onClick={()=>handleRemove(favorite.idMeal)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default FavoriteCards;
