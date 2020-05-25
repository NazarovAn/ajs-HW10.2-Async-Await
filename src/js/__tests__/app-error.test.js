import loadGame from '../app';
import read from '../reader';

jest.mock('../reader');

test('load game error', async () => {
  read.mockImplementation(() => {
    throw new Error('read function error');
  });
  expect(await loadGame()).toEqual(new Error('read function error'));
});
