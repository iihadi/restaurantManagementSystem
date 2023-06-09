import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from './components/HomePage/Homepage'
import { Layout } from './components/Layout'
import { OrderPage } from './components/OrderPage/OrderPage'
import { StaffLogin } from './components/StaffLogin/StaffLogin'
import BurgerMenuBar from './components/OrderPage/BurgerMenuBar'
import {Container, Col, Row} from 'shards-react'
import './App.css'

class App extends Component {

    render() {
        return (
            <div className='app'>
                <BurgerMenuBar />
                <Container> 
                    <Row>
                    <Col xl>
                    <React.Fragment>
                        <Router>
                            <Layout>
                                <Switch>
                                    <Route exact path='/' component={Homepage} />
                                    <Route path='/orderpage' component={OrderPage} />
                                    <Route path='/stafflogin' component={StaffLogin} />
                                </Switch>
                            </Layout>
                        </Router>
                        </React.Fragment>
                        </Col>
                        </Row>
                    </Container>
                </div>
    
        )
    }

}

export default App;