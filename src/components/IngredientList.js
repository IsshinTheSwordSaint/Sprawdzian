import React from "react";
import 'c:/Users/4Mgr1/sprawdzian/src/IngredientList.css';

const IngredientList = ({ingredients}) => {
    const defaultMessage = "Brak składników do wyświetlenia";
    return(
        <>
            {ingredients.length > 0 ? (
                <ul>
                    {ingredients.map((item, index) => (
                        <li key={index} className="prepared">{item}</li>
                    ))}
                </ul>
            ) : (<p>{defaultMessage}</p>)
            }
        </>
    );
};

export default IngredientList;