import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from "../types";

export const createOrder = (order) => (dispatch) => {
    // let response = fetch('http://localhost:5000/api/orders', {
    fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    // }).then( response => response.json())
    }).then( res => res.json())
    // console.log(response);
    .then(data => {
        dispatch({
            type: CREATE_ORDER,
            payload: data,
        });
        localStorage.clear('cartItems');
        dispatch({
            type: CLEAR_CART,
            // payload: 
        });
    }
    );
};

export const clearOrder = () => (dispatch) => {
    dispatch({
        type: CLEAR_ORDER
    });
};