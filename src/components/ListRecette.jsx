import React from 'react';

function ListRecette(props) {
  const { recettes } = props;

  return (
    <div className="recipe-book">
      {recettes.map((recette, index) => (
        <div key={index} className="recipe">
          <div className="recipe-title">{recette.titre}</div>
          <div className="recipe-actions">
            <button className="recipe-edit-button" onClick={() => props.onEditClick(index)}>Edit</button>
            <button className="recipe-delete-button" onClick={() => props.onDeleteRecette(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListRecette;