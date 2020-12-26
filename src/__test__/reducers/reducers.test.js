import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {

  test('Return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const payload = ProductMock;
    const initialState = {
      cart: [],
    };
    const expected = {
      cart: [ProductMock],
    };
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
