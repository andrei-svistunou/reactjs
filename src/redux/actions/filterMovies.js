import { ORDER_FILTER } from './types';

const orderFilter = filter => ({ type: ORDER_FILTER, filter });

export default orderFilter;
