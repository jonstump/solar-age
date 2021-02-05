import { Human } from '../src/js/age.js';

describe('Human', () => {

  test('should correctly create an object with user age and birth gender', () => {
    const human = new Human (25, "female");
    expect(human.age).toEqual(25);
    expect(human.birthGender).toEqual("female");
    expect(human.earthAvgLife).toEqual(0)
  })
})

describe('Life Expectancy on Earth', () => {

  test('should correctly output female life expectancy on Earth for age under 65', () => {
    const human = new Human (25, "female");
    expect(human.earthExpectancy()).toEqual(82);
  })
  test('should correctly output male life expectancy on Earth for age under 65', () => {
    const human = new Human (25, "male");
    expect(human.earthExpectancy()).toEqual(76);
  })
  test('should correctly output female life expectancy on Earth for age over 65', () => {
    const human = new Human (75, "female");
    expect(human.earthExpectancy()).toEqual(21);
  })
  test('should correctly output male life expectancy on Earth for age over 65', () => {
    const human = new Human (75, "male");
    expect(human.earthExpectancy()).toEqual(18);
  })
})

describe('Life expectancy on Mercury', () => {
  test ('should correctly output female life expectancy on Mercury for age under 65', () => {
    const human = new Human (25, "female");
    human.earthExpectancy();
    expect(human.mercuryExpectancy()).toEqual(354);
  })
  test('should correctly output male life expectancy on Mercury for age under 65', () => {
    const human = new Human (25, "male");
    human.earthExpectancy();
    expect(human.mercuryExpectancy()).toEqual(328);
  })
  test('should correctly output female life expectancy on Mercury for age over 65', () => {
    const human = new Human (75, "female");
    human.earthExpectancy();
    expect(human.mercuryExpectancy()).toEqual(90);
  })
  test('should correctly output male life expectancy on Mercury for age over 65', () => {
    const human = new Human (75, "male");
    human.earthExpectancy();
    expect(human.mercuryExpectancy()).toEqual(77);
  })
})

describe('Life expectancy on Venus', () => {
  test('should correctly output femal life expectancy on Venus for age under 65', () => {
    const human = new Human (25, "female");
    human.earthExpectancy();
    expect(human.venusExpectancy()).toEqual(40)
  })
})