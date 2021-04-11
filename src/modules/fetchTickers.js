import axios from 'axios'

const key ="d2c43b4e35e1e033861de3a2aaa7a23e" ;
const link = `http://api.marketstack.com/v1/tickers?access_key=${key}`


const getTickers = async() => {

    const response = await axios.get(link)
    return response
}

export default getTickers;
