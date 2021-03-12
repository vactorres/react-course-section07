import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GiftGrid from './GiftGrid';

function GiftExpertApp() {

    const [categories, setCategories] = useState(["ONE PUNCH"]);
    
   // const handleAdd= () =>{
   //     setCategories([...categories,"Hola"]);
   // }
    return (
        <>
         <h2> GiftExpertApp</h2>
         <AddCategory setCategories={setCategories}/>
         <hr/>
            {
                categories.map(category => 
                    
                    <GiftGrid key={category} category={category}/>
                )
            }
  
        </>
    )
}

export default GiftExpertApp
