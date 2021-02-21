import React, { useEffect, useState } from 'react'
import "./style.css";
import { Link, useParams } from "react-router-dom";
import Ingredients from "./OneRecipe/Ingredients";
import Directions from "./OneRecipe/Directions";
import Nutririons from "./OneRecipe/Nutritions";
import RecipesData from "./data/recipes.json";

// in some variables nutritions are Ingredients 

export default function OneRecipe() {

  let {id} = useParams();

  var apiArray = Object.values(RecipesData[id].ingredient.map((cvalue) => {
    return cvalue.name;
  }));

  const [InputList, setInputList] = useState("")
  const [nutritions, setNutritions] = useState(apiArray);

  const addNutrition = () => {
    setNutritions((oldNutritions) => {
      return [...oldNutritions, InputList]
    })
    setInputList("");
  }
  
  const nutritionEvent = (e) => {
    setInputList(e.target.value)
  }

  const removeIngredient = (id) => {
    setNutritions((oldNutritions) => {
      return oldNutritions.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }

  useEffect(() => {
    document.title = RecipesData[id].name + " | Recipe App"
  }, [])

  return (
    <div className="or-container">
      <h1 className="or-title">{`${RecipesData[id].icon} ${RecipesData[id].name}`}</h1>
      <div className="or-desciption">{RecipesData[id].description}</div>
      <br />
      <div className="or-no-ingredients">
        You required {RecipesData[id].ingredient.length} ingredient for recipe
      </div>

      <div className="ingredients">
        <div className="ingredients-list">
          <h3>Ingredients</h3>

          {nutritions.map((itemVal, index) => {
            return <Ingredients ingre={itemVal} clickRemove={removeIngredient} key={index} id={index} />
          })}

        </div>
      </div>

      <div className="add-ingredient">
        <input type="text" placeholder="Add ingredient" onChange={nutritionEvent} value={InputList} />
        <button onClick={addNutrition}>Add</button>
      </div>

      <hr />

      <div className="directions">
        <h3>Directions</h3>
        {RecipesData[id].directions.map((dir, index) => {
          return (
            <div>
              <Directions direction={dir} count={index} />
              <br/>
            </div>
          );
        })}
        <br />
      </div>

      <hr />

      
    <div className="nutrition">
      <h3>Nutritions Fact</h3>
      <Nutririons nutritions={RecipesData[id].nutritions} />
    </div>

      <Link to="/" className="back-link">back</Link>
    </div>
  );
}
