import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store/reducers';

type Auth = 'pristine' | 'authenticated' | 'unauthenticated';
export function useAuth(): Auth {
	return useSelector(({ auth }: RootState) => auth.get('auth') || 'pristine');
}
