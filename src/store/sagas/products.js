import { put } from 'redux-saga/effects';
import { Creators as ProductActions } from '../ducks/products';

export function* addProduct(action) {
  const { data } = yield action.payload.product;

  yield put(ProductActions.addProductSuccess(data));
}
