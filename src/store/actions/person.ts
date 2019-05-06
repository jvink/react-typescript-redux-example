import { action } from 'typesafe-actions';
import { AgencyActions } from './types';

export const fetchPerson = () => action(AgencyActions.FETCH);
export const fetchPersonSuccess = (data: any) =>
  action(AgencyActions.FETCH_SUCCESS, data);
export const fetchPersonError = (error: string) =>
  action(AgencyActions.FETCH_ERROR, error);
