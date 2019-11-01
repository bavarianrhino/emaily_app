import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return (
        <div>
            <SurveyList />
            <div className="row">
                <div className="col s4 offset-s8">
                    <div className="action-btn right">
                        <Link to="/surveys/new" className="btn-floating btn-large waves-effect waves-light pulse green">
                            <i className="material-icons">add</i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;