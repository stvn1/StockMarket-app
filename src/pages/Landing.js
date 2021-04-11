import React, {useState} from 'react'

//components
import DashBoard from '../components/Dashboard'
import Navbar from '../components/Navbar'
import WatchList from '../components/WatchList'
import Tickers from '../components/Tickers'


function Landing() {

    const [displayDashBoard, setDisplayDashBoard] = useState(false)
    const [displayWatchList, setDisplaWatchList] = useState(false)
    const [displayTickers, setDisplayTickers] = useState(true)



    //display onClick
    const display = (view) => {
        setDisplayDashBoard(false)
        setDisplaWatchList(false)
        setDisplayTickers(false)
        switch (view) {
            case 'tickers':
                setDisplayTickers(true)
                break;

            case 'watchlist':
                setDisplaWatchList(true)
                break;

            case 'dashboard':
                setDisplayDashBoard(true)
                break;
        }
    }
    return (
        <div>
            <Navbar />
            <div className ='box-container'>
              <div className='sidebar'>
                    <div className='sidebar-item'
                        onClick={ () => display('tickers') }
                    > 
                        @icon Ticker 
                    </div>

                    <div className='sidebar-item'
                        onClick={ () => display('watchlist') }
                    > 
                        @icon Watchlist
                    </div>
                    
                    <div  className='sidebar-item'
                            onClick={ () => display('dashboard') }
                    > @icon Dashboard
                    
                    </div>

              </div>

                {displayDashBoard? <DashBoard /> : null}
                {displayTickers? <Tickers /> : null}
                {displayWatchList? <WatchList /> : null}



            </div>
 
            
        </div>
    )
}

export default Landing
