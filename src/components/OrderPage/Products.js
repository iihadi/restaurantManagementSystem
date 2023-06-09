import React, { Component } from 'react'
import { Card, CardTitle, CardBody, CardSubtitle, CardText, Button, Popover, PopoverHeader} from 'shards-react'
import  util  from './util'
import styled from 'styled-components'
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"


const Styles = styled.div`
    .products {
        text-align: center;
        color: #54241C;
        
    }
    .product-name {
        color: #54241C;
        size: 15px;
    }
    .product-subtitle {
        color: #54241C;
    }
    .product-text{
        color: #54241C;
        font-size: 15px;
    }
    .product-body {
        color: #54241C;
    }
`


export default class Products extends Component {
    

    render() {
        const productItems = this.props.products.map(product => (
            <Styles>
            <div className="products" key={product.id}>
                <Card style={{ minWidth: "300px", maxWidth: "300px", minHeight: "300px"}}>
                    <CardBody className='product-body'>
                            <CardTitle className='product-name'>{product.name} - {util.formatCurrency(product.price)}</CardTitle>
                            <CardSubtitle className='product-subtitle'>{product.type} - {product.calories} calories</CardSubtitle>
                            <CardText className='product-text'>{product.description}</CardText>
                           
                        </CardBody>
                        <Button id="popover-1" outline squared theme="danger" onClick={(e) => this.props.handleAddToCart(e, product)}>Add to Basket</Button>
                       
                    </Card>
                    <Popover
                        placement="bottom"
                        open={this.open}
                        toggle={this.props.toggle}
                        target="#popover-1"
                    >
                        <PopoverHeader>Added to Basket</PopoverHeader>
                    </Popover>
                    
                    <br />
                </div>
                </Styles>
        ));

        return (
            <div className='row'>
                {productItems}
                
            </div>
            
        )
    }
}


 
 