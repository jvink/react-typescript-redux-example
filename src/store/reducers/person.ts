import { Reducer } from 'redux';
import { AgencyActions } from '../actions/types';

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
    case AgencyActions.FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case AgencyActions.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        persons: payload,
      };
    case AgencyActions.FETCH_ERROR:
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
