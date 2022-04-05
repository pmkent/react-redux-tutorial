2022-4-02

4:09:43 / 4:39:31
Part 14- Create Order (Fetch API)
#React #Redux #Tutorial
React & Redux Tutorial - Full Shopping Cart in 4 Hours [2020]
115,621 viewsJul 13, 2020
Coding with Basir
37.6K subscribers

Part 13: Create Order
1. Backend
2. server.js
3. crete order modal
4. GET /api/orders
5. POST /api/orders
6. DELETE /api/order/:id
7. Front-end
8. create types
9. types.js
10. CLEAR_ORDER, CLEAR_CART, CREATE_ORDER
11. Create actions
12. actions/orderActions.js
13. createOrder(order)
14. clearOrder()
15. create reducers
16. reducers/orderReducers.js
17. Case CREATE_ORDER
18. Case CLEAR_ORDER
19. Update Cart component
20. components/Cart.js
21. Connect order, createOrder, clearOrder
22. form onSubmit={this.createOrder}
23. createOrder() this.props.createOrder(order)
24. closeModal() this.props.clearOrder()

2022-4-01

3:49:20 - 13. Add Recux Cart:
1. Update task and branch
2. type.js
3. Create ADD_TO_CART
4. Create REMOVE_FROM_CART
5. actions/cartActions.js
6. Create addToCart
7. Create removeFromCart
8. reducers/cartReducers.js
9. case ADD_TO_CART
10. case REMOVE_FROM_CART
11. Cart.js
12. connect props: cartItems
13. connect actions: removeFromCart
14. Product.js
15. add action addToCart
16. App.js
17. Remove Cart props
18. store.js
19. Set initial cartItems to localStorage
20. Check result
21. Update task and branch

14. Create Order:

3:46:55 / 4:39:31
Part 12- Add Redux To Filter Bar (Redux)
#React #Redux #Tutorial
React & Redux Tutorial - Full Shopping Cart in 4 Hours [2020]
115,621 viewsJul 13, 2020
Coding with Basir
37.6K subscribers

2022-3-31

https://github.com/basir

https://www.youtube.com/watch?v=nKyrXWH5XLM&t=264s
3:42:59 / 4:39:31
Part 12- Add Redux To Filter Bar (Redux)
#React #Redux #Tutorial
React & Redux Tutorial - Full Shopping Cart in 4 Hours [2020]
115,574 viewsJul 13, 2020

2022-3-30

Part 12: Add Redux to Filter Bar
1. Update task and branch
2. types.js
3. Create FILTER_PRODUCTS_BY_SIZE
4. Create ORDER_PRODUCTS_BY_PRICE
5. actions/productActions.js
6. Create filterProducts
7. Move app.js filterProducts logic here
8. Create sortProducts
9. Move app.js filterProducts logic here
10. reducers/productReducers.js
11. Case FILTER_PRODUCTS_BY_SIZE
12. Case FILTER_PRODUCTS_BY_PRICE
13. Filter.js
14. Connect props: size, sort, items and filteredItems
15. Connect actions: filterProducts and sortProducts
16. Show loading if no filteredProducts??
17. App.js
18. Remove Filter props
19. Check result
20. Update task and branch

Part 13: Add Redux to Cart

$$

hanging in the index.js file, the value of <React.StrictMode> to <React.Fragment>

WORKED (showed dress list from MongoDB first time ever!)
npm install cors
https://expressjs.com/en/resources/middleware/cors.html

2022-3-29

Part II
Add Redux To Product List
1. What is Redux (diagram)
2. Update tast on spreadsheet
3. Create branch add-redux-products
4. npm install redux react-redux redux-thunk
5. import redux
6. Set initial state
7. Create types
8. types.js
9. define FETCH_PRODUCTS
10. actions/productActions.js
11. declare fetchProducts
12. create reducers
13. reducers/productReducers.js
14. define case FETCH_PRODUCTS
15. create store
16. store.js

2022-3-28

Branch name (return to error)
animation-modal

2022-3-27

npm i --save-dev @types/react-reveal

Basir using
npm i react@16.13.1
    "react": "^17.0.2",
    "react-dom": "^17.0.2",

    "react-modal": "^3.14.4",

2:57:02 / 4:39:31
Part 10- Backend API (Node & MongoDB)
#React #Redux #Tutorial

POSTMAN Add Products
2:53:42 / 4:39:31
Part 10- Backend API (Node & MongoDB)
#React #Redux #Tutorial
React & Redux Tutorial - Full Shopping Cart in 4 Hours [2020]
115,118 viewsJul 13, 2020

{
    "image": "/images/dress7.jpg",
    "title": "Dress 7 bad test",
    "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    "availableSized": [],
    "price": 49.9,
    "_id": "kFX5Jvp0i",
    "__v": 0
}

Basir's package.json
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "body-parser": "^1.19.2",
    "express": "^4.17.3",
    "mongoose": "^6.2.8",
    "nodemon": "^2.0.15",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-modal": "^3.14.4",
    "react-reveal": "^1.2.2",
    "react-scripts": "5.0.0",
    "shortid": "^2.2.16",
    "web-vitals": "^2.1.4"
  },

$$

npm run server
Invalid schema configuration: `Generate` is not a valid type at path `_id`. See https://bit.ly/mongoose-schematypes for a list of valid schema types.

package.json
  "scripts": {
    "server": "nodemon server.js",

npm install express body-parser mongoose shortid

npm install nodemon

2:33:52 / 4:39:31
Part 10- Backend API (Node & MongoDB)
React & Redux Tutorial - Full Shopping Cart in 4 Hours [2020]
115,118 viewsJul 13, 2020

10. Create Products Backend

1. Install nodemon globally
2. Add server.js
3. Install express body-parser mongoose shortid
4. Install MongoDB
5. app = express()
6. app.use(bodyParser.json())
7. mongoose.connect()
8. create Product model
9. app.post("/api.produducts")
10. Postman send post request
11. route.get{"/api/products"}
12. route.delete("/api/products/:id")

11. Add Redux


2022-3-25

npm install react-modal
2:17:54 / 4:39:31
Part 09- Add Animations and Modals (React-Reveal)
#React #Redux #Tutorial
React & Redux Tutorial - Full Shopping Cart in 4 Hours [2020]

2022-3-24

\dev\projects\tutorials\reactjs>npx create-react-app react-redux-tutorial

  cd react-redux-tutorial
  npm start

https://www.youtube.com/watch?v=nKyrXWH5XLM&t=264s

15.3.0
npm install
npm audit fix

npm install react-reveal


$$$$$$$$$$$$$

Upto 2:17:16 all react-reveal Fade cascade! All not working

Skip fade. ERROR
2:11:31 / 4:39:31
Part 09- Add Animations and Modals (React-Reveal)
#React #Redux #Tutorial
React & Redux Tutorial - Full Shopping Cart in 4 Hours [2020]

2022-3-23

npm install react-reveal

Checkout form done

2:09:37 / 4:39:31
https://www.youtube.com/watch?v=nKyrXWH5XLM&t=264s

2022-3-22

Checkout from
1. Set Active Task Management spreadsheet
2. Create checkout-form Git branch
3. Cart.js
4. Make cart items persistent
5. Use LocalStorage on App constructor to load cart items (JSON.parse)
6. User LocalStorage on addToCart to save cart items (JSON.state)
7. Handle click on Process
8. Update showCheckout state to true on click
9. Conditional rendering checkout form
10. Get Email, Name and Address required input
11. Define handleInput function
12. Add checkout button
13. Handle onSubmit form event

2022-3-20

End of Cart functions
1:49:20 / 4:39:31
Part 07- Cart Component (State Management)

2022-3-18

Use rcc to create classes

1. Set Active Task management spredsheet
2. Create cart-component branch
3. Product.js
4. Handle 'Add to Cart' to this.props.addToCart(product)
5. App.js
6. Add cartItems to state as []
7. Create addToCart(product)
8. Slice, Check product existence, add to cartItems
10. Define cartItems, order from this.props
11. Check cartItems.length and show message
12. List cartItems {cartItems.length > 0 && ()}
13. index.css
14. Style cart, cart-header, cart-items (img, li),
15. Use LocalStorage on App constructor to load cart items (JSON.parse)
16. Use LocalStorage on addToCart to save cart items (JSON.stringify)

1:25:36 / 4:39:31
Part 07- Cart Component (State Management)
#React #Redux #Tutorial
React & Redux Tutorial - Full Shopping Cart in 4 Hours [2020]
114,673 viewsJul 13, 2020
https://www.youtube.com/watch?v=nKyrXWH5XLM&t=264s

$$$$$$$$$$$$$$
https://www.youtube.com/watch?v=nKyrXWH5XLM&t=264s

4:28 / 4:39:31

â€¢
Part 01- What You Will Make


#React #Redux #Tutorial
React & Redux Tutorial - Full Shopping Cart in 4 Hours [2020]
114,673 viewsJul 13, 2020

Coding with Basir
37K subscribers

Build Shopping Cart By React & Redux For All Levels Developers
ðŸ‘‰ Heroku Demo  : https://reactredux-shoppingcart.herok...
ðŸ‘‰ AWS Demo       : https://reactcart.webacademy.pro/
ðŸ‘‰ GitHub               : https://github.com/basir/react-shoppi...
ðŸ‘‰ Questions         : https://webacademy.pro/reactcart
ðŸ‘‰ Contact             : basir.jafarzadeh@gmail.com