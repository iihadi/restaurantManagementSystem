import React, { Component } from 'react'
import { FormSelect, Container, Col, Row, FormCheckbox } from 'shards-react'
import './Filter.css'

export default class Filter extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                   <FormSelect value={this.props.type} onChange={this.props.handleMenuChange}>
                            <option value=''>All</option>
                            <option value='Nibbles'>Nibbles</option>
                            <option value='Street Food'>Street Food</option>
                            <option value='Salads and Bowls'>Salads and Bowls</option>
                            <option value='Bigger Plates'>Bigger Plates</option>
                            <option value='Desert'>Desert</option>
                            <option value='Drinks'>Drinks</option>
                        </FormSelect>   
                    </Col>
                    <Row>
                    <Col> 
                            <FormCheckbox
                                className='allergies-filter'
                                toggle
                                small
                                inline
                                onChange={this.props.handleAllergiesChange}
                                value='Vegan'>
                                Vegan
                        </FormCheckbox>
                    </Col>
                    <Col> 
                            <FormCheckbox
                                className='allergies-filter'
                                small
                                toggle
                                inline
                               
                                onChange={this.props.handleAllergiesChange}>
                                GlutenFree
                        </FormCheckbox>
                    </Col>
                    <Col>
                            <FormCheckbox
                                onChange={this.props.handleAllergiesChange}
                                className='allergies-filter'
                                toggle
                                small
                                inline>
                                
                                Vegetarian
                        </FormCheckbox>
                        </Col>
                        <Col>
                            <FormCheckbox
                                className='allergies-filter'
                                toggle
                                small
                                inline
                                onChange={this.props.handleAllergiesChange}
                               >
                                NutFree
                        </FormCheckbox>
                        </Col>
                    </Row>
                    <Col>
                        {this.props.count} items found
                    </Col>
                    
                </Row>
            </Container>
            )
    }
}