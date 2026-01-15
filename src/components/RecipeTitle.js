import React from "react";
import  '../RecipeTitle.css';
   
const RecipeTitle = ({title, rating, reviews}) => {
    return(
        <>
            {rating > 3.5 ? 
            <h1 className="over">{title}</h1> :
            <h1 className="under">{title}</h1>}  
            <p className="recipe-rating">Ocena: {rating} ({reviews} recenzji)</p>
        </>
    );
}
export default RecipeTitle;