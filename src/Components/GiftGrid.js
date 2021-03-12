import React  from 'react'
import { useFetchGift } from '../hooks/useFetchGift';
import GiftGridItem from './GiftGridItem';

function GiftGrid({category}) {
 
    const {data:images,loading}=useFetchGift(category)
   

    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">
        {loading&& <p>Cargado</p>}
            {images.map((imagen) =>
                <GiftGridItem key={imagen.id} {...imagen} />
                )}
           
        </div>
        </>
    )
}

export default GiftGrid
