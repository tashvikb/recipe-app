import React from 'react'
import './style.css'
import { Link, useParams } from 'react-router-dom'


export default function Recipe(props) {

  let {id} = useParams();

  return (
    <Link className="recipe-link" to={`/recipe/${props.recipe.id}`}>
      <div className="recipe">
        <div className="recipe-name">{props.recipe.name}</div>
        <div className="recipe-des">{`${props.recipe.icon} you have ${(props.recipe.ingredient).length} ingredients for ${props.recipe.name} recipe`}</div>
      </div>
    </Link>
  )
}
