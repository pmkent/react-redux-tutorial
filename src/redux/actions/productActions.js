import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async (dispatch) => {
    // const res = await fetch('http://localhost:5000/api/products');
    let response = await fetch(
        'http://localhost:5000/api/products',
        {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
        },
   }).then(response => response.json());
    // const data = await res.json();
    console.log(response);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: response, // data,
    });
};