import React, { useState } from "react";

import { GifGrid, AddCategories } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Rick and Morty"]);

  const onAddCategory = (newCategorie) => {
    if (categories.includes(newCategorie)) {
      return;
    } else {
      setCategories([newCategorie, ...categories]);
    }
    console.log(newCategorie);
  };

  return (
    <>
      <AddCategories onewCategorie={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
