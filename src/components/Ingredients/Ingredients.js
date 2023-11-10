import React,{useState, useEffect} from 'react';
import './Ingredients.css';
import config2 from '../../config2';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Ingredients = () => {
    const {recipeId} = useParams();
    const url2 = config2.endpoint + recipeId
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    const recipesDetailsApi = async() => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
                const result = response.data.meals;
                console.log(result);
                setItems(result);
            } catch (error){
                console.log('error', error)
            }
        }

        useEffect(()=>{
            recipesDetailsApi();
        },[]);
    

    const handleBackButton = () => {
        navigate('/');
    }
  return (
    <>
      <div onClick={()=>handleBackButton()} className='back-page'>Back</div>

      {
        items ? (
            items.map((item, id) => (
                <div className="ingregients-container" key={id}>
                    <div>
                        <img
                        className="image-2"
                        src={item.strMealThumb}
                        alt="recipe" 
                        />
                    </div>
                    <div>
                        <h2 className="details-container">Name {" "} - {" "}{item.strMeal}</h2>
                        <br />
                        <h2 className="details-container">Area {" "} - {" "}{item.strArea}</h2>
                        <br />
                        <h2 className="details-container">Category {" "} - {" "}{item.strCategory}</h2>
                        <br />
                        <br />
                        <br />
                        <h2>Ingredients:</h2>
                        <br />
                        <div className='ingredients'>
                            <h5>1. {item.strIngredient1} {" "} - {" "} {item.strMeasure1}</h5>
                            <h5>2. {item.strIngredient2} {" "} - {" "} {item.strMeasure2}</h5>
                            <h5>3. {item.strIngredient3} {" "} - {" "} {item.strMeasure3}</h5>
                            <h5>4. {item.strIngredient4} {" "} - {" "} {item.strMeasure4}</h5>
                            <h5>5. {item.strIngredient5} {" "} - {" "} {item.strMeasure5}</h5>
                            <h5>6. {item.strIngredient6} {" "} - {" "} {item.strMeasure6}</h5>
                            <h5>7. {item.strIngredient7} {" "} - {" "} {item.strMeasure7}</h5>
                            <h5>8. {item.strIngredient8} {" "} - {" "} {item.strMeasure8}</h5>
                            <h5>9. {item.strIngredient9} {" "} - {" "} {item.strMeasure9}</h5>
                            <h5>10. {item.strIngredient10} {" "} - {" "} {item.strMeasure10}</h5>
                            <h5>11. {item.strIngredient11} {" "} - {" "} {item.strMeasure11}</h5>
                            <h5>12. {item.strIngredient12} {" "} - {" "} {item.strMeasure12}</h5>
                            <h5>13. {item.strIngredient13} {" "} - {" "} {item.strMeasure13}</h5>
                        </div>
                        <br />
                        <h2>Instructions:</h2>
                        <p>{item.strInstructions}</p>

                    </div>
                  
                </div>
            ))
        ) : (
            <h2>No Recipe Found</h2>
        )
      }
    </>
  )
}

export default Ingredients
