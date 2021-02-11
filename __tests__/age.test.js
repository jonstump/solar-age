import { Human, UserStrings } from '../src/age.js';

describe('Human', () => {
  test('should correctly create an object with user age and birth gender', () => {
    const human = new Human (25, "female");
    expect(human.age).toEqual(25);
    expect(human.birthGender).toEqual("female");
    expect(human.earthAvgLife).toEqual(0);
    expect(human.mercuryAge).toEqual(0);
    expect(human.venusAge).toEqual(0);
    expect(human.marsAge).toEqual(0);
    expect(human.jupiterAge).toEqual(0);
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

describe('UserStrings', () => {
  test('should correctly create an object of empty strings to show to users', () => {
    let userstrings = new UserStrings();
    expect(userstrings.earth).toBe("")
    expect(userstrings.mercury).toBe("")
    expect(userstrings.venus).toBe("")
    expect(userstrings.mars).toBe("")
    expect(userstrings.jupiter).toBe("")
  })
})

describe('Life Expectancy on Earth', () => {
  test('should correctly output female life expectancy on Earth for age under 65', () => {
    const human = new Human (25, "female");
    human.earthExpectancy();
    expect(human.earthAvgLife).toEqual(82);
  })
  test('should correctly output male life expectancy on Earth for age under 65', () => {
    const human = new Human (25, "male");
    human.earthExpectancy();
    expect(human.earthAvgLife).toEqual(76);
  })
  test('should correctly output female life expectancy on Earth for age over 65', () => {
    const human = new Human (75, "female");
    human.earthExpectancy();
    expect(human.earthAvgLife).toEqual(21);
  })
  test('should correctly output male life expectancy on Earth for age over 65', () => {
    const human = new Human (75, "male");
    human.earthExpectancy();
    expect(human.earthAvgLife).toEqual(18);
  })
})

describe('Interstellar Age Calculator', () => {
  let human;
  beforeEach(() => {
    human = new Human (25, "female");
    human.earthExpectancy();
    human.insterstellarAge();
  });
  test('should calculate age for Mercury', () => {
    expect(human.mercuryAge).toEqual(104);
  })
  test('should calculate age for Venus', () => {
    expect(human.venusAge).toEqual(40);
  });
  test('should calculate age for Mars', () => {
    expect(human.marsAge).toEqual(13);
  });
  test('should calculate age for Jupiter', () => {
    expect(human.jupiterAge).toEqual(2);
  });
  test('should calculate life expectancy for Mercury', () => {
    expect(human.mercuryExpectancy).toEqual(342);
  });
  test('should calculate life expectancy for Venus', () => {
    expect(human.venusExpectancy).toEqual(132);
  });
  test('should calculate life expectancy for Mars', () => {
    expect(human.marsExpectancy).toEqual(44);
  });
  test('should calculate life expectancy for Jupiter', () => {
    expect(human.jupiterExpectancy).toEqual(7);
  });
})

describe('Interstellar Life Left', () => {
  let human;
  beforeEach(() => {
    human = new Human(25, "female");
    human.earthExpectancy();
    human.insterstellarAge();
    human.lifeLeft();
  })
  test('should calculate how much life a person has left on Earth', () => {
    expect(human.earthLifeLeft).toEqual(57);
  })
  test('should calculate how much life a person has left on Mercury', () => {
    expect(human.mercuryLifeLeft).toEqual(238);
  })
  test('should calculate how much life a person has left on Venus', () => {
    expect(human.venusLifeLeft).toEqual(92);
  })
  test('should calculate how much life a person has left on Venus', () => {
    expect(human.marsLifeLeft).toEqual(31);
  })
  test('should calculate how much life a person has left on Venus', () => {
    expect(human.jupiterLifeLeft).toEqual(5);
  })
})

describe('Interstellar life past expectancy', () => {
  let human;
  beforeEach(() => {
    human = new Human(100, "female");
    human.earthExpectancy();
    human.insterstellarAge();
    human.lifeLeft();
  })
  test('should check if person has lived past life expectancy', () => {
    expect(human.lifeLeft()).toBeTruthy;
  })
  test ('should calculate how much someone has lived past their life expectancy on Earth', () => {
    expect(human.earthLifeLeft).toEqual(14);
  })
  test ('should calculate how much someone has lived past their life expectancy on Mercury', () => {
    expect(human.mercuryLifeLeft).toEqual(59);
  })
  test ('should calculate how much someone has lived past their life expectancy on Venus', () => {
    expect(human.venusLifeLeft).toEqual(22);
  })
  test ('should calculate how much someone has lived past their life expectancy on Mars', () => {
    expect(human.marsLifeLeft).toEqual(7);
  })
  test ('should calculate how much someone has lived past their life expectancy on Jupiter', () => {
    expect(human.jupiterLifeLeft).toEqual(1);
  })
})

describe('Age Alert', () => {
  let human;
  let userstrings;
  beforeEach(() => {
    human = new Human(25, "female");
    human.earthExpectancy();
    human.insterstellarAge();
    human.lifeLeft();
    userstrings = new UserStrings();
    userstrings.userAlert(human);
  })
  test ('Should attach the user age and life expectancy for earth as a string', () => {
    expect(userstrings.earth).toBe("You are 25 years old and have 82 years left to live");
  })
  
})
