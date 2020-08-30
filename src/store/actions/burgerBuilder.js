import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

//action creator
export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
}

//synchronized actions
export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

//middleware
export const initIngredients = () => {
    return dispatch => {
        axios.get( 'https://theburgerbuilderproj.firebaseio.com/ingredients.json' )
        .then( response => {
            dispatch(setIngredients(response.data));
        } )
        .catch( error => {
            dispatch(fetchIngredientsFailed())
        } );
    };
};
