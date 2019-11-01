import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            console.log(survey)
            return (
                <div className="col s12 m6" key={survey._id}>
                    <div className="card grey lighten-3" key={survey._id}>
                        <div className="card-content grey-darken-4-text">
                            <span className="card-title">{survey.title}</span>
                            <p>{survey.body}</p>
                            <p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
                        </div>
                        <div className="card-action">
                            <a>Yes: {survey.yes}</a>
                            <a>No: {survey.no}</a>
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

// ************************************
// Notes can be found in consolelog.js 
// ************************************