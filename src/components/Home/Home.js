import React, { useState, useEffect } from "react";
import config from "../../config";
import axios from "axios";
import RecipeList from "../RecipeList/RecipeList";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Favorites from "../Favorites/Favorites";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  console.log(favorites)
  const url = config.endpoint + query;
  const navigate = useNavigate();

  const recipeApi = async () => {
    try {
      const response = await axios.get(url);
      const result = response.data.meals;
      console.log(result);
      setRecipes(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleNavigate = () => {
    navigate("/favorites");
  };

  useEffect(() => {
    recipeApi();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    recipeApi();
  };

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const addToFavorites = (data) => {
    //console.log(data);
    setFavorites([...favorites, data]);
  };

  const handleRemove = (favoriteId) => {
    const updatedData = favorites.filter((item) => item.idMeal !== favoriteId);
    setFavorites(updatedData);
}
  return (
    <>
      <div className="landing-page">
        <SearchBar
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          query={query}
        />
        <h2 className="favorite-heading">
          Favorites
        </h2>
      </div>
      <div className="hompage-container">
      <Box sx={{ flexGrow: 1 }} className="landing-page-2">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {recipes ? (
            recipes.map((recipe) => (
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <RecipeList
                  recipe={recipe}
                  id={recipe.idMeal}
                  key={recipe.idMeal}
                  addToFavorites={addToFavorites}
                />
              </Grid>
            ))
          ) : (
            <h2 className="heading-2">No Recipes Found</h2>
          )}
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="landing-page-2">
        <Grid
          container
          // spacing={{ xs: 2, md: 3 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {favorites ? (
            favorites.map((favorite) => (
              <Grid item xs={12}>
                <Favorites
                  favorite={favorite}
                  id={favorites.idMeal}
                  key={favorites.idMeal}
                  addToFavorites={addToFavorites}
                  setFavorites={setFavorites}
                  handleRemove={handleRemove}
                />
              </Grid>
            ))
          ) : (
            <h2 className="heading-2">No Recipes Found</h2>
          )}
        </Grid>
      </Box>
      </div>
    </>
  );
};

export default Home;
