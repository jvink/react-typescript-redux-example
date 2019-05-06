import { createActionsWithPrefix } from '../../utils/action';

export const AgencyActions = createActionsWithPrefix('AGENCY/', {
  FETCH: 'FETCH',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  TEST: 'test',
});
