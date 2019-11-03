import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import * as actions from '../actions'
import Header from "./Header";
import Landing from './Landing'
import Dashboard from './Dashboard'
import Thankyou from './Thankyou'
import Login from './Login'
import SurveyNew from './surveys/SurveyNew'

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div style={{backgroundColor: '#fb6f6f'}} className="cover">
                        <Header />
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/thankyou' component={Thankyou} />
                        <Route exact path='/surveys' component={Dashboard} />
                        <Route path='/surveys/new' component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    };
};

export default connect(null, actions)(App);