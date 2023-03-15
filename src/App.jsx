import { useState } from 'react'
import './App.css'
import AddRecette from './components/AddRecette'
import ListRecette from './components/ListRecette'
import EditRecette from './components/EditRecette'
import ShoppingList from './components/ShoppingList'

function App() {
  const [recettes, setRecettes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showVue, setShowVue] = useState(true);
  const [shoppingList, setShoppingList] = useState([]);

  const handleAddRecette = (titre) => {
    setRecettes([...recettes, {titre, ingredients: []}]);
  }

  const handleDeleteRecette = (index) => {
    const newRecettes = [...recettes];
    newRecettes.splice(index, 1);
    setRecettes(newRecettes);
  }

  const handleEditClick = (index) => {
    setEditIndex(index);
    setShowVue(false);
  }

  const onSaveRecette = (index, recette) => {
    const newRecettes = [...recettes];
    newRecettes[index]=recette;
    setRecettes(newRecettes);
  }

  const show = () => {
    setShowVue(true);
  }

  const handleAddToShoppingListClick = () => {
    const newShoppingList = [...shoppingList, ...ingredients];
    setShoppingList(newShoppingList);
  };

  return (
    <div className="main">
      <h1 className="main-title">Livre de Recettes</h1>

    {showVue &&
      <>
        {/* Ajouter une recette */}
        <AddRecette onAddRecette={handleAddRecette} />

        {/* Afficher la liste des recettes */}
        <ListRecette recettes={recettes} onDeleteRecette={handleDeleteRecette} onEditClick={handleEditClick} />
      </>
    }

      {/* Éditer une recette */}
      {editIndex !== null && (
        <EditRecette
          recette={recettes[editIndex]}
          onSaveRecette={onSaveRecette}
          onCancelClick={() => setEditIndex(null)}
          index={editIndex}
          show={show}
          onAddToShoppingListClick={handleAddToShoppingListClick}
        />
      )}

      {/* Shopping list */}
      <ShoppingList recettes={recettes} shoppingList={shoppingList} />
    </div>
  )
}

export default App
