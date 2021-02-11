export default class UserStrings {
  constructor() {
    this.earth = "";
    this.mercury = "";
    this.venus = "";
    this.mars = "";
    this.jupiter = "";
  }

  userAlert(human) {
    this.earth = `You are ${human.age} years old and have a life expectancy of ${human.earthAvgLife} years`;
    this.mercury = `You are ${human.mercuryAge} years old and have a life expectancy of ${human.mercuryExpectancy} years`;
    this.venus = `You are ${human.venusAge} years old and have a life expectancy of ${human.venusExpectancy} years`;
    this.mars = `You are ${human.marsAge} years old and have a life expectancy of ${human.marsExpectancy} years`;
    this.jupiter = `You are ${human.jupiterAge} years old and have a life expectancy of ${human.jupiterExpectancy} years`;
  }
}