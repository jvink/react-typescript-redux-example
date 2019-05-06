import { Reducer } from 'redux';
import * as PersonActions from '../actions/types';

export type TodosAction = typeof PersonActions;

export interface PersonState {
    persons: Person[];
    isLoading: boolean;
    error?: string;
}

const initialState: PersonState = {
    persons: [],
    isLoading: false,
    error: undefined,
}

const reducer: Reducer<PersonState> = (state = initialState, { type, payload }) => {
    switch (type) {
        case PersonActions.FETCH_PERSON:
            return {
                ...state,
                isLoading: true,
            };
        case PersonActions.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                persons: payload,
            };
        case PersonActions.FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        default:
            return {
                ...state,
            };
    }
}

export { reducer as personReducer };