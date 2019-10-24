import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Header from "./Header";
import Landing from './Landing'


// const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/surveys' component={Dashboard} />
                        <Route path='/surveys/new' component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    };
};

export default connect(null, actions)(App);




// Below was used to to get skate board rolling and now 
// refactor using component for fetch life-cycles
// **************************************************
// import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Header from "./Header";

// // const Header = () => <h2>Header</h2>
// const Dashboard = () => <h2>Dashboard</h2>
// const SurveyNew = () => <h2>SurveyNew</h2>
// const Landing = () => <h2>Landing</h2>

// const App = () => {
//     return (
//         <div>
//             <BrowserRouter>
//                 <div className="container">
//                     <Header />
//                     <Route exact path='/' component={Landing} />
//                     <Route exact path='/surveys' component={Dashboard} />
//                     <Route path='/surveys/new' component={SurveyNew} />
//                 </div>
//             </BrowserRouter>
//         </div>
//     );
// };

// export default App

// BrowserRouter expects one child
// If exact={true} is not explicitly called JSX defaults to it