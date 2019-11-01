import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

// import { } from 'semantic-ui-react';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.map(survey => {
            return (
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1" key={survey.id}>
                        <div className="card-content white-text">
                            <span className="card-title">{survey.title}</span>
                            <p>{survey.body}</p>
                            <p>{survey.body}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='row'>
                {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { surveys: state.surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);

// MAPSTATETOPROPS REFACTOR
// function mapStateToProps({ surveys }) {
//     return { surveys }
// }