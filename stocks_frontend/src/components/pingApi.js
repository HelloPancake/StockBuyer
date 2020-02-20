
const API_KEY = "pk_ac81368467b24eada94d112074655283"
const API_URL_PART_1 = `https://cloud.iexapis.com/stable/stock/`
const API_URL_PART_2 = `/quote?token=${API_KEY}`

const PingApi = async (symbol) => {
    let response = await fetch(API_URL_PART_1 + symbol + API_URL_PART_2)
    let stockObject = await response.json()
    return stockObject
}

export default PingApi