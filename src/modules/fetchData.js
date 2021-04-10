import axios from 'axios'

const key ="d2c43b4e35e1e033861de3a2aaa7a23e" ;
const symbols = 'VOD'
const link = `http://api.marketstack.com/v1/eod?access_key=${key}&symbols=${symbols}`


const getData = async() => {

    const response = await axios.get(link)
    return response
}

export default getData;

