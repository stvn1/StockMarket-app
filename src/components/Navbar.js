import React from 'react'


import {useDispatch} from 'react-redux'

import {changeSelection} from '../reducers/selectionReducer'



const Navbar = ()=> {

    const dispatch = useDispatch();

    const vodClickButton = () =>{
        dispatch(changeSelection({selection:"VOD"}))
    }
    const aaplClickButton = () =>{
        dispatch(changeSelection({selection:"AAPL"}))
    }



    return (
        <div>
           <button onClick={vodClickButton}>
               VOD
           </button>
           <button onClick={aaplClickButton}>
               AAPL
           </button>
            
        </div>
    )
}

export default Navbar
