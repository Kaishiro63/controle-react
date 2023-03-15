import { useState } from 'react';

function AddRecette({ onAddRecette }) {
  const [titre, setTitre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddRecette(titre);
    setTitre('');
  }

  const handleChange = (event) => {
    setTitre(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="new-recipe-form">
      <input type="text" className="recipe-title-input" value={titre} onChange={handleChange} placeholder="Add a new recipe..." required/>
      <button type="submit" className="recipe-create-button">Add</button>
    </form>
  );
}

export default AddRecette;