import {useEffect, useState} from "react"
import { getGift } from '../helpers/getIGift';

export const useFetchGift= (category) =>{

    const [state, setstate] = useState({
        data:[],
        loading:true,
    })


    useEffect(()=> { 
        
        getGift({category}).then( 
        imgs => {
            setstate({
            data:imgs,
            loading:false,

        })
        
            })
    }
        ,[category])

    return state;
}