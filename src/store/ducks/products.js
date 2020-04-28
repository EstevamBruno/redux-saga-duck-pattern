/**
 * Types
 */

export const Types = {
  ADD_REGISTER: 'products/ADD_REGISTER',
  ADD_SUCCESS: 'produts/ADD_SUCCESS',
};

/**
 * Reducers
 */

const STATE = {
  data: [{ id: Math.random(), name: 'Produto Teste', code: '2424', price: 5 }],
};

export default function reducers(state = STATE, action) {
  switch (action.type) {
    case Types.ADD_REGISTER:
      console.log(state.data);
      return { ...state };
    case Types.ADD_SUCCESS:
      return { data: [...state.data, action.payload.data] };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addProductRegister: (product) => ({
    type: Types.ADD_REGISTER,
    payload: { product },
  }),

  addProductSuccess: (data) => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
};
