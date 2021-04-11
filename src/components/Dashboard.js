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

    const getTicker = useSelector(state => state.selection.selection)

    
    useEffect(() => {
        console.log('mount')
        //Function runned when component is mounted to add data to the store
        const addDataToStore = async() =>{
            let response = await getData(getTicker);
            // console.log(response)
            if(response  instanceof Error){
                alert(response.message)
                return;
            }
            // console.log(response.data.data)
            let data = await response.data.data
            // console.log(data)
            dispatch(addData({data}))
            setFetched(true)
        }

        addDataToStore()
      

        return () => {
        }

        //run when ticker changes
    },[getTicker]);

    const DashBoardData = useSelector(state => state.data.data)

    const displayDashBoardData = () => {
        // console.log(DashBoardData)
        return(
            <div>
                <table>
                    <tbody>
                    <tr className='table-title'>
                        <td>
                        Stock prices
                        </td>
                    </tr>
                        <tr>
                            <th>Symbol</th>
                            <th>Date</th>
                            <th>Open</th>
                            <th>High</th>
                            <th>Low</th>
                            <th>Close</th>
                        </tr>
                        {DashBoardData.data.map((dt, index)=>(
                            <tr key={uniqid()}>
                                <td> {dt.symbol} </td>
                                <td> {dt.date} </td>
                                <td> {dt.open} </td>
                                <td> {dt.high} </td>
                                <td> {dt.low} </td>
                                <td> {dt.close} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div className='dashboard'>
            {fetched ? 
            displayDashBoardData()
            :null
            }  
        </div>
    )
}
export default Tickers
