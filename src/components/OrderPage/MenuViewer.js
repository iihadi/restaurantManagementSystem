import React, { Component } from "react"
import Products from "./Products"
import Filter from "./Filter"
import Basket from "./Basket"
import styled from 'styled-components'
import Modal from 'react-modal'
import SlidingPane from 'react-sliding-pane'
import { Button } from 'shards-react'
import {ToastProvider} from 'react-toast-notifications'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"

const Styles = styled.div`
     .menu-viewer {
        color: #54241C;
        text-align: center;
    }
    .menu-header {
    color: #54241C;
    text-align: center;
    }
    .basket {
      padding-bottom: 15px;
    }
    .products {
        padding-right: 10px;
    }
    .button-for-checkout{
        position: absolute;
    right: 0;
    top: 0;
    display: block;
    height: 50px;
    width: 150px;
    }
    .mu {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
    }
`


class MenuViewer extends Component {
    constructor() {
        super()
        this.state = {
            type: "",
            vegan: "",
            nuts: false, 
            vegetarian: false, 
            glutenFree: false,
            
            cartItems: [],
            products: [],
            filteredProducts: [],
            isPaneOpen: false,
            isPaneOpenLeft: false
        }
        this.toggle = this.toggle.bind(this)
    }
    componentWillMount() {
        if (localStorage.getItem("cartItems")) {
            this.setState({
                cartItems: JSON.parse(localStorage.getItem("cartItems"))
            });
        }

        fetch("https://oaxaca-db-connection.herokuapp.com/products")
            .then(res => res.json())
            .catch(() =>
                console.log("you done messed up")
            )
            .then(data => {
                this.setState({ products: data });
                this.listProducts();
            });
    }

    componentDidMount() {
        Modal.setAppElement(this.el)
    }

    handleRemoveFromCart = (e, product) => {
        this.setState(state => {
            const cartItems = state.cartItems.filter(a => a.id !== product.id);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return { cartItems: cartItems }
        });
    };

    handleAddToCart = (e, product) => {
        this.setState(state => {
            const cartItems = state.cartItems
            let productAlreadyInCart = false

            cartItems.forEach(cp => {
                if (cp.id === product.id) {
                    cp.count += 1;
                    productAlreadyInCart = true
                    console.log(cp)
                }
            });

            if (!productAlreadyInCart) {
                cartItems.push({ ...product, count: 1 });
            }
            
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return { cartItems: cartItems };
        })
        this.toggle()
    }

    handleRemoveMenuItem = (e, product) => {
        this.setState(state => {
            const cartItems = state.cartItems
            cartItems.forEach(cp => {
                if (cp.id === product.id & cp.count > 0) {
                    cp.count--
                    console.log(cp)
                }
                if (cp.count < 0) {
                    this.handleRemoveFromCart(cartItems)
                }
            })
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return { cartItems: cartItems };
        })
    }

    listProducts = () => {
        this.setState(state => {
            if (state.type !== "") {
                return {
                    filteredProducts: state.products.filter(
                        e => e.type === state.type
                        
                    )
                }
            }
            if (state.vegan) {
                return {
                    filteredProducts: state.products.filter(
                        e => e.vegan === state.vegan
                    )
                }
            }
            return { filteredProducts: state.products }
        })
    }

    handleMenuChange = e => {
        console.log(e.target.value)
       
        this.setState({ type: e.target.value })
        this.listProducts()
    }

    handleAllergiesChange = e => {
        this.state({vegan: true})
    }

    checkout = () => {
        fetch('https://oaxaca-db-connection.herokuapp.com/active_orders', {
            body: JSON.stringify(this.state.cartItems),
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 201) {
                    alert('Order placed')
                } else {
                    alert('Order not placed')
                }
            })
    }

    toggle() {
        console.log('toggled')
        this.setState({
            open: !this.state.open
        })
    }

    

    render() {


        return (
            <Styles>
                
                <div className="menu-viewer">
                    <div>
                    <h1>Menu
                        <div className='div-sticky'>

                        </div>
                    </h1>
                    <hr />

                    <div className='menu-header'>
                        <div className='row'>

                            <Filter
                                count={this.state.filteredProducts.length}
                                handleMenuChange={this.handleMenuChange}
                                vegan={this.state.vegan}
                                nuts={this.state.nuts}
                                vegetarian={this.state.vegetarian}
                                glutenFree={this.state.glutenFree}
                        />
                            <Button
                                size="sm"
                                className='button-for-checkout'
                                pill theme="dark"
                                onClick={() => this.setState({ isPaneOpen: true })}>Basket {this.state.cartItems.length}
                            </Button>
                            </div>
                            </div>


                        <hr />
                        <Products
                            className='products'
                            products={this.state.filteredProducts}
                            handleAddToCart={this.handleAddToCart}
                            toggle={this.toggle}
                            open={this.state.open}
                        />
                        <SlidingPane
                            className='temp'
                            isOpen={this.state.isPaneOpen}
                            title='Basket'
                            onRequestClose={() => {
                                this.setState({ isPaneOpen: false })
                            }} >
                            <div className='basket'>
                                <Basket
                                    className='basket'
                                    cartItems={this.state.cartItems}
                                    handleRemoveFromCart={this.handleRemoveFromCart}
                                    handleAddToCart={this.handleAddToCart}
                                    handleRemoveMenuItem={this.handleRemoveMenuItem}
                                    checkout={this.checkout}
                                />
                            </div>
                        </SlidingPane>


                    </div>
                </div>
            </Styles>
        )
    }
}

export default MenuViewer