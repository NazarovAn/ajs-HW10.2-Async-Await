import json from './parser';
import read from './reader';

export default async function loadGame() {
  try {
    const response = await read();
    const data = await json(response);
    return data;
  } catch (err) {
    return err;
  }
}
