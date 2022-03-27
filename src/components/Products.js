import React, { Component } from 'react'
import Modal from 'react-modal/lib/components/Modal';
import formatCurrency from '../util'
// import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        };
    }
    
    openModal = (product) => {
        // console.log(product);
        this.setState({ product });
    }
    closeModal = () => {
        this.setState({ product: null });
    }
    // const [isOpen, setIsOpen] = useState({open: false});
    render() {
        // const [isOpen, setIsOpen] = useState(false);
        // this.setState({ this.state.open: true })
        const { product } = this.state;
        return (
            <div>
                {/* <Fade bottom cascade={true}> */}
                <ul className='products'>
                    {this.props.products.map(product => (

                        <li key={product._id}>
                            <div className='product'>
                                {/* <a href={'#' + product._id} onClick={() => setIsOpen(true)}> */}
                                <a href={'#' + product._id} onClick={() => this.openModal(product)}>
                                    <img src={product.image} alt={product.title}></img>
                                    <p>{product.title}</p>
                                </a>
                                <div className='product-price'>
                                    <div>{formatCurrency(product.price)}</div>
                                    <button onClick={() => this.props.addToCart(product)} className='button primary'>Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* </Fade> */}

                {
                    product && <Modal>
                        {/* <Zoom> */}
                            <div>
                                <button>x</button>
                                <div className='product-details'>
                                    <img src={product.image} alt={product.title} />
                                    <div className='product-detail-desc'>
                                        <p><strong>{product.title}</strong></p>
                                        <p>{product.description}</p>
                                        <p>
                                            Available Sizes {' '}
                                            {product.availableSizes.map(x => (
                                                <span> {' '} <button className='button'>{x}</button></span>
                                            ))}
                                        </p>
                                        <div className='product-price'>
                                            <div>{formatCurrency(product.price)}</div>
                                            <button className='button primary' onClick={() => {
                                                this.props.addToCart(product);
                                                this.closeModal();
                                            }}>
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </Zoom> */}
                    </Modal>
                }

            </div>
        )
  }
}