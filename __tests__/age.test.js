// import { describe } from 'yargs'; I don't know but this line here keeps adding itself randomly while I worked on my project.

import { Human } from '../src/age.js';

describe('Human', () => {

  test('should correctly create an object with user age and birth gender', () => {
    const human = new Human (25, "female");
    expect(human.age).toEqual(25);
    expect(human.birthGender).toEqual("female");
    expect(human.earthAvgLife).toEqual(0);
    expect(human.mercuryAge).toEqual(104);
    expect(human.venusAge).toEqual(40);
    expect(human.marsAge).toEqual(13);
    expect(human.jupiterAge).toEqual(2);
    expect(human.mercuryExpectancy).toEqual(0);
    expect(human.venusExpectancy).toEqual(0);
    expect(human.marsExpectancy).toEqual(0);
    expect(human.jupiterExpectancy).toEqual(0);
    expect(human.earthLifeLeft).toEqual(0);
    expect(human.mercuryLifeLeft).toEqual(0);
    expect(human.venusLifeLeft).toEqual(0);
    expect(human.marsLifeLeft).toEqual(0);
    expect(human.jupiterLifeLeft).toEqual(0);
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

describe('Interstellar Age Calculator', () => {
  test('should calculate age for Mercury, Venus, Mars, and Jupiter', () => {
    const human = new Human (25, "female");
    human.insterstellarAge();
    expect(human.mercuryAge).toEqual(104);
    expect(human.venusAge).toEqual(40);
    expect(human.marsAge).toEqual(13);
    expect(human.jupiterAge).toEqual(2);
  })
  test('should calculate life expectancies for Mercury, Venus, Mars, and Jupiter based on Earth expectancy', () => {
    const human = new Human (25, "female");
    human.earthExpectancy();
    human.insterstellarAge();
    expect(human.mercuryExpectancy).toEqual(342);
    expect(human.venusExpectancy).toEqual(132);
    expect(human.marsExpectancy).toEqual(44);
    expect(human.jupiterExpectancy).toEqual(7);
  })
});

describe('Interstellar Life Left', () => {
  test('should calculate how much life a person has left per planet', () => {
    const human = new Human(25, "female");
    human.earthExpectancy();
    human.insterstellarAge();
    human.lifeLeft();
    expect(human.earthLifeLeft).toEqual(57);
    expect(human.mercuryLifeLeft).toEqual(238);
    expect(human.venusLifeLeft).toEqual(92);
    expect(human.marsLifeLeft).toEqual(31);
    expect(human.jupiterLifeLeft).toEqual(5);
  })
  test('should check if person has lived past life expectancy', () => {
    const human = new Human(100, "female");
    human.earthExpectancy();
    human.insterstellarAge();
    expect(human.lifeLeft()).toEqual(true);
  })
  test ('should calculate how much someone has lived past their life expectancy', () => {
    const human = new Human(100, "female");
    human.earthExpectancy();
    human.insterstellarAge();
    human.lifeLeft();
    expect(human.earthLifeLeft).toEqual(14);
    expect(human.mercuryLifeLeft).toEqual(59);
    expect(human.venusLifeLeft).toEqual(22);
    expect(human.marsLifeLeft).toEqual(7);
    expect(human.jupiterLifeLeft).toEqual(1);
  })
})
