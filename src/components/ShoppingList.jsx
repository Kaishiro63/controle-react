import React, { useState, useEffect } from 'react';

function ShoppingList({ recettes, shoppingList  }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    // Crée une liste d'ingrédients unique en fusionnant tous les ingrédients de chaque recette
    const allIngredients = recettes.reduce((acc, recette) => {
      const newIngredients = recette.ingredients.filter((ingredient) => !acc.includes(ingredient));
      return [...acc, ...newIngredients];
    }, []);

    setIngredients(allIngredients);
  }, [recettes]);

  const handleCheckAllClick = () => {
    const newIngredients = [...ingredients];
    newIngredients.forEach((ingredient) => (ingredient.checked = true));
    setIngredients(newIngredients);
  };

  const handleClearCheckedClick = () => {
    const newIngredients = ingredients.filter((ingredient) => !ingredient.checked);
    setIngredients(newIngredients);
  };

  const handleClearAllClick = () => {
    setIngredients([]);
  };

  const handleCheckboxChange = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index].checked = event.target.checked;
    setIngredients(newIngredients);
  };

  return (
    <div className="shopping-list">
      <h2 className="shopping-list-title">Shopping list</h2>
      <ul className="recipe-ingredients-list">
        {shoppingList.map((ingredient, index) => (
        <li className="recipe-ingredient" key={index}>
            <label className="shopping-list-item">
            <input type="checkbox" /> {ingredient}
            </label>
        </li>
        ))}
      </ul>
      <div className="shopping-list-actions">
        <button className="shopping-list-clear-button" onClick={handleCheckAllClick}>
          Check all
        </button>
        <button className="shopping-list-clear-button" onClick={handleClearCheckedClick}>
          Clear checked items
        </button>
        <button className="shopping-list-clear-button" onClick={handleClearAllClick}>
          Clear all
        </button>
      </div>
    </div>
  );
}

export default ShoppingList;