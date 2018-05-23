import devConfigStore from './configureStore.dev';
import prodConfigStore from './configureStore.prod';

const configStore = process.env.NODE_ENV === 'production' ? prodConfigStore : devConfigStore;

export default configStore;
