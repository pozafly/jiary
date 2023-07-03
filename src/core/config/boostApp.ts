import store from '@/store/store.ts';
import { setAccessToken, setUser } from '@/store/slices/authSlice.ts';

export default function bootApp() {
  const accessToken = localStorage.getItem('accessToken');
  const user = localStorage.getItem('user');

  if (accessToken) {
    store.dispatch(setAccessToken(accessToken));
  }
  if (user) {
    store.dispatch(setUser(JSON.parse(user)));
  }
}
