import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategories = ({ onewCategorie }) => {
  const [inputValue, setInputValue] = useState("");

  const oneInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    /* setInputValue([...onAddCategory, inputValue]); */

    onewCategorie(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={oneInputChange}
      />
    </form>
  );
};

AddCategories.propTypes = {
  onewCategorie: PropTypes.func.isRequired,
};
