import React from 'react';
import { Link } from 'react-router';

import SessionActions from '../actions/SessionActions.jsx';
import AlertModal from '../components/modals/AlertModal.jsx';

import Credentials from '../components/authentication/Credentials.jsx';
import SocialMedia from '../components/authentication/SocialMedia.jsx';
import AuthHandler from '../components/authentication/AuthHandler.jsx';

var LoginWithPassword = React.createClass({
    mixins: [Credentials],

    render() {
        return(
            <form onSubmit={this.onSubmit} >
                { this.email_input('email', false) }
                { this.password_input('password', true) }
                <div className="form-options clearfix">
                    <Link to="/reset_password_request" className="pull-right">
                        Forgot password?
                    </Link>
                </div>
            </form>
        )
    },

    onSubmit(e) {
        e.preventDefault();
        SessionActions.create({
            email: this.state.email,
            password: this.state.password
        });
    }
});

var Login = React.createClass({
    mixins: [AuthHandler],

    render() {
        return (
            <div className="login-wrapper">
                <div id="login-container" className='login-container active'>
                    <a>
                        <img width="100" height="30" src="/assets/images/logo-login@2x.png" />
                    </a>
                    <LoginWithPassword />
                    <SocialMedia />
                    <p className="signup">
                        <span>Don't have an account yet?</span>
                        <span>{"  "}</span>
                        <Link to="/sign_up">
                            <span>Sign Up now</span>
                        </Link>
                    </p>
                </div>

                <AlertModal alerts={this.state.alerts} />
            </div>
        );
    }
});

export default Login;