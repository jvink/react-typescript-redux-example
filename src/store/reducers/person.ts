import { Reducer } from 'redux';
import { PersonActions } from '../actions/types';

export interface PersonState {
  persons: Person[];
  isLoading: boolean;
  error?: string;
}

const initialState: PersonState = {
  persons: [],
  isLoading: false,
  error: undefined,
};

const reducer: Reducer<PersonState> = (
  state = initialState,
  { type, payload }
) => {
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
};

export { reducer as personReducer };
