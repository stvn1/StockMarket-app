import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import uniqid from 'uniqid'

//redux stuff
import {addData} from '../reducers/dataReducer'

//modules
import getData from '../modules/fetchData'


function Tickers() {
    const dispatch = useDispatch()


    const [fetched,setFetched] = useState(false)
    
 
    //Function runned when component is mounted to add data to the store
    const addDataToStore = async() =>{
        let response = await getData();
        // console.log(response.data.data)
        let data = await response.data.data
        // console.log(data)
        dispatch(addData({data}))
        setFetched(true)
    }




    useEffect(() => {

        addDataToStore()
      

        return () => {
        }
           // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const DashBoardData = useSelector(state => state.data.data)

    const displayDashBoardData = () => {

       

        console.log(DashBoardData)

        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Symbol</th>
                            <th>Date</th>
                            <th>Open</th>
                            <th>High</th>
                            <th>Low</th>
                            <th>Close</th>
                        </tr>
                        {DashBoardData.data.map((ticker, index)=>(
                            <tr key={uniqid()}>
                                <td> {ticker.symbol} </td>
                                <td> {ticker.date} </td>
                                <td> {ticker.open} </td>
                                <td> {ticker.high} </td>
                                <td> {ticker.low} </td>
                                <td> {ticker.close} </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            
            </div>
        )




    }


    return (
        <div>
            <h2>Data</h2>
            {fetched ? 

            displayDashBoardData()


            :null

            }
       

            
        </div>
    )
}

export default Tickers
