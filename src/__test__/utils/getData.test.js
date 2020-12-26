import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API y retornar datos', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    const response = await getData('https://google.com');
    expect(response.data).toEqual('12345');
  });

});
