import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import reducers from '../reducers';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
	...reducers,
	router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;
