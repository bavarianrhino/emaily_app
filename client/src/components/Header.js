import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


class Header extends Component {

    funcName = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <div>
                THIS IS THE HEADER DIV
            </div>
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
