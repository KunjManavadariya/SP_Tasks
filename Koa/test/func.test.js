import { mathOperations } from './func';
import axios from 'axios';
import { helper } from '../helpers/helper';
jest.mock('axios');

describe('Function tests', () => {
  test('Sum verifier', () => {
    let result = mathOperations.sum(2, 3);
    expect(result).toBe(5);
  });
  test('Difference verifier', () => {
    let result = mathOperations.diff(100, 35);
    // expect(result).toBe(25);
    expect(result).toBe(65);
  });
  test('Product verifier', () => {
    let result = mathOperations.product(20, 5);
    expect(result).toBe(100);
  });
  test('Division verifier', () => {
    let result = mathOperations.divide(20, 0);
    expect(result).toBe(Infinity);
  });
  test('Testing API', async () => {
    const data2 = await helper('google');
    expect(typeof data2).toBe('object');
  });
});
