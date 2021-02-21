import React from 'react'
import Recipe from "./Recipe";
import RecipesData from "./data/recipes.json";

export default function RecipeList() {


  return (
    <div className="recipes">
      {RecipesData.map((recipeDetails, index) => {
        return <div>
          <Recipe recipe={recipeDetails} />
        </div>;
      })}
    </div>
  );
}
