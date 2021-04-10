import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {  nanoid } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

import {addData} from '../reducers/dataReducer'

//modules
import getData from '../modules/fetchData'


function Tickers() {
    const dispatch = useDispatch()

    const [data,setData] = useState([])
    const [show,setShow] = useState(false)
    const [fetched,setFetched] = useState(false)

    const [open,setOpen] = useState([])
    const [close,setClose] = useState([])
    const [ex,setEx] = useState([])

    // const addData = async() =>{
    //     let response = await getData();
    //     // console.log(response.data.data)
    //     let data = await response.data.data


    //     for( let i = 0; i <50; i ++){
    //         setOpen(prev => [...prev,data[i].open])
    //         setClose(prev => [...prev,data[i].close])
    //         setEx(prev =>[...prev,data[i].exchange])
         
    //     }
    //     // console.log(open)
    //     setShow(true)
    // }
 
    const addDataToStore = async() =>{
        let response = await getData();
        // console.log(response.data.data)
        let data = await response.data.data
        dispatch(addData({data}))
        setFetched(true)

    }
    const tickers = useSelector(state => state.data)
    console.log(tickers)

    const displayTickers = () => {
        console.log('for loop')
        console.log(tickers[0].data.length)
        let rows = [];
        
        for(let i = 0 ; i < tickers[0].data.length; i++){
            rows.push(tickers[0].data[i])

        }
        console.log(rows)

   
   



    }





    // const displayTickers = ()=>{
    //     let data =[]
    //     for(let i=0; i <50; i ++){
    //         data.push([open[i], close[i], ex[i]])
    //     }
    //     console.log( data)


    //     return (
         
    //         <div>
    //             Data
            
    //                {data.map(dt => (
    //                    <p key ={uniqid()}>{dt[0]} {dt[1]} {dt[2]}</p>
    //                ))}

    //         </div>
    //     )
    
     
    // }






    useEffect(() => {

        addDataToStore()
        // addData();

        return () => {
        }
    }, [])

    return (
        <div>
            <h2>Data</h2>
            {/* {renderedTickers} */}
            {/* {displayTickers} */}
            {fetched ? 

            displayTickers()


            :null

            }
       

            
        </div>
    )
}

export default Tickers
