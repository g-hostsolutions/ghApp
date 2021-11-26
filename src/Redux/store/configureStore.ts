import { history, RootState } from './reducers'
import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './reducers'
import immutableTransform from './immutable.js'
import { routerMiddleware } from 'connected-react-router'

export const attachProductTypeToAction =
	(store: { getState: () => RootState }) => (next: (arg0: any) => void) => (action: { productType: string | null }) => {
		const { router } = store.getState()
		action.productType = router?.location?.pathname?.split('/')[1] || null
		next(action)
	}

const middleware: Middleware[] = [routerMiddleware(history), thunk, attachProductTypeToAction, logger]

const persistConfig = {
	transforms: [immutableTransform()],
	key: 'root',
	version: 1,
	storage,
	blacklist: ['router'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = compose(applyMiddleware(...middleware))

export const store = createStore(persistedReducer, composedEnhancers)

export const persistor = persistStore(store)
