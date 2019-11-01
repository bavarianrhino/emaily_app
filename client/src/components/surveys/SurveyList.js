import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    handleDeleteSurvey(id) {
        console.log(id)
        this.props.deleteSurvey(id)
    }

    renderSurveys() {
        if(this.props.surveys.length === 0){
            return (
                <div class="col s12 m6">
                    <div class="card-panel">
                        <span class="card-title white-text">No Surveys!</span>
                        <p class="white-text">Please add a survey by clicking the green button below.</p>
                    </div>
                </div>
            )
        } else {
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
                                <a className="waves-effect waves-light btn right red" style={{ 'margin-top': '-0.5em' }} onClick={() => this.handleDeleteSurvey(survey._id)}><i class="material-icons">clear</i></a>
                            </div>
                        </div>
                    </div>
                )
            })
        }
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

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList);

// ************************************
// Notes can be found in consolelog.js 
// ************************************