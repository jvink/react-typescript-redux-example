import { action } from 'typesafe-actions';
import * as PersonActions from './types';

export const fetchPerson =  () => action(PersonActions.FETCH_PERSON);
export const fetchPersonSuccess =  (data: any) => action(PersonActions.FETCH_SUCCESS, data);
export const fetchPersonError =  (error: string) => action(PersonActions.FETCH_ERROR, error);