import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { AgencyActions } from '../actions/types';
import { fetchPersonSuccess, fetchPersonError } from '../actions/person';

const URL = 'https://randomuser.me/api/?results=20';

const fetchData = async (url: string): Promise<any> => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data.results;
  } catch (error) {
    return { error };
  }
};

function* handleFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(fetchData, URL);

    if (res.error) {
      yield put(fetchPersonError(res.error));
    } else {
      yield put(fetchPersonSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchPersonError(err.stack!));
    } else {
      yield put(fetchPersonError('An unknown error occured.'));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(AgencyActions.FETCH, handleFetch);
}

// Export our root saga.
// We can also use `fork()` here to split our saga into multiple watchers.
export function* personSaga() {
  yield all([fork(watchFetchRequest)]);
}
