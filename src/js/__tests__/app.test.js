import loadGame from '../app';

test('load game', async () => {
  const testData = await loadGame();
  expect(testData).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
});
