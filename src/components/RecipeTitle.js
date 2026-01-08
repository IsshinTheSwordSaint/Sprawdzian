import React from "react";
import  'c:/Users/4Mgr1/sprawdzian/src/RecipeTitle.css';
   
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