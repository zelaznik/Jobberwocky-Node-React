import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
import Store from './_templates/Store.jsx';
import { LOGOUT } from '../constants/EventConstants.jsx';
import Cookies from '../utils/Cookies.jsx';

var _errors=[];

function setSession(params) {
    var u = params.response.user;
    Cookies.set('authToken', u.auth_token);
    Cookies.set('email', u.email);
    Cookies.set('userId', u.id);
}

function clearSession() {
    Cookies.reset();
}

var SessionStore = new Store({
    data() {
        return {
            email: Cookies.get('email'),
            loggedIn: this.loggedIn()
        };
    },

    token() {
        return Cookies.get('authToken');
    },

    loggedIn() {
        return !!this.token();
    }
});

AppDispatcher.register((payload) => {
    switch(payload.actionType) {
        case SessionConstants.SIGN_IN_SUCCESS:
            setSession(payload);
            SessionStore.emitChange();
            break;

        case SessionConstants.SIGN_OUT:
            clearSession();
            SessionStore.emit(LOGOUT);
            SessionStore.emitChange();
            break;

    }
});

export default SessionStore;