import { all } from 'redux-saga/effects';

import { Types as ProductTypes } from '../ducks/products';
import { addProduct } from './products';

export default function* rootSaga() {
  yield all([ProductTypes.ADD_REGISTER, addProduct]);
}
