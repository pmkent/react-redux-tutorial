import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';


class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className='grid-container'>
          <header>
            <a href='/'>React Shopping Cart</a>
          </header>
          
          <main>
            <div className='content'>
              <div className='main'>
                <Filter />
                <Products />
              </div>
              <div className='sidebar'>
                <Cart
                  // createOrder={this.createOrder}
                />
              </div>
            </div>
          </main>
    
          <footer>
            All rights reserved.
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;