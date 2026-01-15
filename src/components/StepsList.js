import React from "react";
import '../IngredientList.css';

const StepsList = ({steps}) => {
    const defaultMessage = "Brak kroków do wyświetlenia";
    return(
        <>
            {steps.length > 0 ? (
                <ol>
                    {steps.map((item, index) => (
                        <li key={index}><input type="checkbox"/>{item}</li>
                        
                    ))}
                </ol>
            ) : (<p>{defaultMessage}</p>)
            }
        </>
    );
}

export default StepsList;