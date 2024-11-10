import axios from "axios";

const BASE_URL = 'https://geektrust.s3.ap-southeast-1.amazonaws.com'

export const fetchProducts = async () => {
    const resp = await axios.get(`${BASE_URL}/coding-problems/shopping-cart/catalogue.json`)
    return resp.data
}