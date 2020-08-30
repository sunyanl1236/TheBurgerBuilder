import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        /*
        reducer(state, action)
        expect the reducer and pass initial state as undefined that is the case when the state is just getting set up at the beginning of our app
        and action is empty object, in this case we expect the state to equal initial state defined in the reducer 
        */
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

    it('should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false
        }, {type: actionTypes.AUTH_SUCCESS, idToken: 'some-token', userId: 'some-user-id'})).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
});