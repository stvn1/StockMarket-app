import React from 'react'


import {useDispatch} from 'react-redux'
import {useState} from 'react'

import {changeSelection} from '../reducers/selectionReducer'



const Navbar = ()=> {

    const [searchText,setSearchText] = useState('')

    const dispatch = useDispatch();

    const searchButtonClicked = () =>{
        dispatch(changeSelection({selection:searchText}))
    }




    return (
        <div className = 'navBar'>
            <input 
                className='search' 
                type='text' 
                onChange={(e)=>setSearchText(e.target.value)}
                />
                <button
                    onClick={searchButtonClicked}
                >
                    Load Ticker
                </button>

            
        </div>
    )
}

export default Navbar
