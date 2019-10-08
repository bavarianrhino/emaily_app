import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


class Header extends Component {

    funcName = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Emaily</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Login with Google</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        attr: state.attr
    }
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
