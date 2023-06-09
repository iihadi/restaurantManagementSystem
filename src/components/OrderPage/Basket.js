import React, { Component } from 'react';
import util from './util'
import styled from 'styled-components'
import { Card, CardTitle, CardBody, CardSubtitle, Button, ButtonGroup, Container, Row, Col } from 'shards-react'


const Styles = styled.div`
    .basket-item {
         padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px;

    }

`

export default class Basket extends Component {

    constructor() {
        super();
        this.state = {
            amountOfItems: 0
        }
    }

  
    handleCountItems = (cartItems) => {
        var amountOfItems
        cartItems.forEach(cp => {
            amountOfItems += cp.count
        })
        this.state.amountOfItems += cartItems.length
        console.log(amountOfItems)
        return this.state.amountOfItems.setState(amountOfItems)

    }

    render() {
        const { cartItems } = this.props

        const productItems = cartItems.map(item => (
            <div className='basket-item'>
            <Card key={item.id} style={{ minWidth: "300px", maxWidth: "300px", maxHeight: "250px", minHeight: "200px" }}>
                <CardBody className='product-body'>
                    <CardTitle className='product-name'>
                        <ButtonGroup size='small'>
                            <Button  onClick={(e) => this.props.handleAddToCart(e, item)}>+</Button>
                                <Button theme="danger" onClick={(e) => this.props.handleRemoveMenuItem(e, item)}>-</Button>
                        </ButtonGroup>
                        <br />
                            {item.count} x {item.name} 
                           
                    </CardTitle>
                        <CardSubtitle className='product-subtitle'>{util.formatCurrency(item.price)}</CardSubtitle>
                        <Button outline pill theme='danger'
                            onClick={(e) => this.props.handleRemoveFromCart(e, item)}>Clear</Button>
                </CardBody>
                </Card>
                </div>
            
                )
            )
                
      

        return (
            <Styles>
            <div className='basket'>
                {cartItems.length === 0
                        ? "Basket is empty" :
                        <div>You have {this.state.amountOfItems} items in the basket. <hr /></div>
                }
                    {cartItems.length > 0 && 
                       

                   
                        <div className=''>
                        <div className='basket-item'>
                            <Container>
                                <Row>
                                    {productItems}
                                </Row>
                                </Container>
                            </div>
                            
                            

                        <b>To Pay: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                        <Button outline squared theme="danger" onClick={() => this.props.checkout()}>Checkout</Button>
                    </div>
                }
                </div>
                
                </Styles>
        )
    }

}

   