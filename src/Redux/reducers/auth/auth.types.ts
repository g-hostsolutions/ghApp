import { Record, fromJS } from 'immutable'

export enum CONSTS_AUTH {
	AUTH = 'auth/USER',
	SET = 'auth/SET',
	DE_AUTH = 'auth/DE_AUTH',
	DE_AUTH_REMOVE = 'auth/DE_AUTH_REMOVE',
}

export interface AuthState {
	email: string | null
	auth?: 'pristine' | 'unauthenticated' | 'authenticated'
	token: string | null
}

export const initialState: IAuthState = fromJS({
	email: null,
	auth: 'pristine',
	token: null
})

export interface IAuthState extends Record<AuthState>, AuthState {}
