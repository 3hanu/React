import React, { useState } from "react";
import style from "./recipe.module.css"
const Recipe = ({title,calories,image,ingredients,cuisine,diet,type,time}) => {
    const formattedCal = calories.toFixed(2);
    const [isFlipped, setIsFlipped] = useState(false);
    const handleMouseEnter = () =>{
        setIsFlipped(true);
    }
    const handleMouseLeave = () =>{
        setIsFlipped(false);
    }
    let cuisineText = "";
    if(cuisine.length>1){
        cuisineText = cuisine.join(", ");
    }else{
        cuisineText = cuisine;
    }
    return(
        <div className={style.recipe} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isFlipped?(<div className={style.back}>
                <h1>Ingredients</h1>
                <ol className={style.ingredientsList}>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
                </ol>
            </div>):(<div className={style.front}>
                <h1>{title}</h1>
                <p>Cuisine Type: {cuisineText}</p>
                <p>Diet: {diet}</p>
                <p>Dish Type: {type}</p>
                <p>Cooking Time: {time} min</p>
                <p>Calories: {formattedCal} cal</p>

                <img className={style.image} src={image} alt=""/>
            </div>)}
        </div> 
    );
};
export default Recipe;
