import { createActionsWithPrefix } from '../../utils/action';

export const PersonActions = createActionsWithPrefix('PERSON/', {
  FETCH_PERSON: 'FETCH_PERSON',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
});