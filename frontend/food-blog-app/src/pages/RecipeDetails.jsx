import React from "react";
import profileImg from "../assets/profile.png";
import { useLoaderData } from "react-router-dom";

export default function RecipeDetails() {
  const recipe = useLoaderData();

  return (
    <div className="recipe-page">

      {/* Header */}
      <div className="recipe-header">
        <img src={profileImg} />
        <div>
          <p>{recipe.email}</p>
          <h2>{recipe.title}</h2>
        </div>
      </div>

      {/* Image */}
      <img
        className="recipe-main-img"
        src={`https://foodrecipe-backend-layw.onrender.com/images/${recipe.coverImage}`}
      />

      {/* Content */}
      <div className="recipe-content">

        <div className="recipe-box">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="recipe-box">
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>

      </div>
    </div>
  );
}
