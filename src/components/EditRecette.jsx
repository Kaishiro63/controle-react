import React, { useState } from 'react';

function EditRecette({ recette, onSaveRecette, onCancelClick, index, show, onAddToShoppingListClick }) {
  const [titre, setTitre] = useState(recette.titre);
  const [description, setDescription] = useState(recette.description);
  const [ingredients, setIngredients] = useState(recette.ingredients);

  const handleTitreChange = (event) => {
    setTitre(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddIngredientClick = (event) => {
    event.preventDefault();
    const newIngredient = event.target.parentElement.querySelector('.recipe-new-ingredient-input').value;
    setIngredients([...ingredients, newIngredient]);
    event.target.parentElement.querySelector('.recipe-new-ingredient-input').value = '';
  };

  const handleDeleteIngredientClick = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleSaveClick = () => {
    const nouvelleRecette = { ...recette, titre: titre, description: description, ingredients: ingredients };
    onSaveRecette(index, nouvelleRecette);
    onCancelClick();
    show();
  };

  const handleCancelClick = () => {
    setTitre(recette.titre);
    setDescription(recette.description);
    setIngredients(recette.ingredients);
    onCancelClick();
    show();
  };

  return (
    <div className="recipe-edit-form">
      <input type="text" className="recipe-edit-title-input" value={titre} onChange={handleTitreChange} />
      <textarea rows={10} className="recipe-edit-description-input" value={description} onChange={handleDescriptionChange} />
      <h2 className="recipe-ingredients-title">Ingredients</h2>
      <ul className="recipe-ingredients-list">
        {ingredients.map((ingredient, index) => (
          <li className="recipe-ingredient" key={index}>
            <input type="text" className="recipe-ingredient-input" value={ingredient} onChange={(event) => {
              const newIngredients = [...ingredients];
              newIngredients[index] = event.target.value;
              setIngredients(newIngredients);
            }} />
            <button className="recipe-ingredient-delete-button" onClick={() => handleDeleteIngredientClick(index)}>🗑</button>
          </li>
        ))}
        <li className="recipe-ingredient">
          <form className="recipe-new-ingredient">
            <input type="text" className="recipe-new-ingredient-input" placeholder="Add a new ingredient..." />
            <button className="recipe-new-ingredient-button" onClick={handleAddIngredientClick}>Add</button>
          </form>
        </li>
      </ul>
      <div className="recipe-edit-actions">
        <button className="recipe-edit-save-button" onClick={handleSaveClick}>Save</button>
        <button className="recipe-edit-cancel-button" onClick={handleCancelClick}>Cancel</button>
        <button className="recipe-edit-cart-button" onClick={onAddToShoppingListClick}>Add to shopping list</button>
      </div>
    </div>
  );
}

export default EditRecette;