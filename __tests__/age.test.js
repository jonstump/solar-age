import { Human } from '../src/js/age.js';

describe('Human', () => {

  test('should correctly create an object with user age and birth gender', () => {
    const human = new Human (25, "female");
    expect(human.age).toEqual(25);
    expect(human.birthGender).toEqual("female");
  })
})

describe('Life Expectancy per Planet', () => {

  test('should correctly calculate life expectancy on Earth', () => {
    const human = new Human (25, "female");
    expect(human.earthExpectancy()).toEqual(82);
  })
})