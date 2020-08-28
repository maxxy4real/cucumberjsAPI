import { expect } from 'chai';

export const wait = ms => new Promise(r => setTimeout(r, ms));

export const poll = async (
  request,
  condition,
  errMsg: string,
  numberOfRetries = 30,
  interval = 1000
) => {
  let res = await request();

  for (let i = 0; i < numberOfRetries; i++) {
    if (condition(res)) {
      return res;
    } else {
      await wait(interval);
      res = await request();
    }
  }
  expect(condition(res), `${errMsg}`).to.be.true;
  return res;
};

