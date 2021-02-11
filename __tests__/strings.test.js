import UserStrings from '../src/strings.js'
import Human from '../src/age.js'

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
  test ('Should attach the user age and life expectancy for Earth as a string', () => {
    expect(userstrings.earth).toBe("You are 25 years old and have a life expectancy of 82 years");
  })
  test ('Should attach the user age and life expectancy for Mercury as a string', () => {
    expect(userstrings.mercury).toBe("You are 104 years old and have a life expectancy of 342 years");
  })
  test ('Should attach the user age and life expectancy for Venus as a string', () => {
    expect(userstrings.venus).toBe("You are 40 years old and have a life expectancy of 132 years");
  })
  test ('Should attach the user age and life expectancy for Mars as a string', () => {
    expect(userstrings.mars).toBe("You are 13 years old and have a life expectancy of 44 years");
  })
  test ('Should attach the user age and life expectancy for Jupiter as a string', () => {
    expect(userstrings.jupiter).toBe("You are 2 years old and have a life expectancy of 7 years");
  })
})