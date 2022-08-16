import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['javascript']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory = { (e) => onAddCategory(e)}
      />

      {
        categories.map( (category) => 
          <GifGrid 
            key={category} 
            category={category}
          />
        )
      }
    </>
  )
}
