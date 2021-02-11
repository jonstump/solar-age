//a quick note on gender. Since I am unable to find life expectancy calculators that include genders past male and female I decided to make my gender "birth gender" for the sake of purposes to attempt to be more inclusive. If I could do a calculation that allowed for more options I would do so.

export class Human {
  constructor (age, birthGender) {
    this.age = age;
    this.birthGender = birthGender;
    this.earthAvgLife = 0;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.mercuryExpectancy = 0;
    this.venusExpectancy = 0;
    this.marsExpectancy = 0;
    this.jupiterExpectancy = 0;
    this.earthLifeLeft = 0;
    this.mercuryLifeLeft = 0;
    this.venusLifeLeft = 0;
    this.marsLifeLeft = 0;
    this.jupiterLifeLeft = 0;
  }
  earthExpectancy() {
    if (this.birthGender === "female" && this.age < 65) {
      this.earthAvgLife = 82;
    } else if (this.birthGender === "female" && this.age >= 65) {
      this.earthAvgLife = 21;
    } else if (this.birthGender === "male" && this.age >= 65) {
      this.earthAvgLife = 18;
    } else {
      this.earthAvgLife = 76;
    }
  }

  insterstellarAge() {
    this.mercuryAge = Math.round(this.age/.24);
    this.venusAge = Math.round(this.age/.62);
    this.marsAge = Math.round(this.age/1.88);
    this.jupiterAge = Math.round(this.age/11.86);
    this.mercuryExpectancy = Math.round(this.earthAvgLife/.24);
    this.venusExpectancy = Math.round(this.earthAvgLife/.62);
    this.marsExpectancy = Math.round(this.earthAvgLife/1.88);
    this.jupiterExpectancy = Math.round(this.earthAvgLife/11.86);
  }

  lifeLeft() {
    const negLifeCheck = (this.earthAvgLife+65)-this.age;
    const newExp = (this.earthAvgLife+65);
    if (negLifeCheck < 0) {
      this.earthLifeLeft = this.age - newExp;
      this.mercuryLifeLeft = this.mercuryAge - Math.round(newExp / .24);
      this.venusLifeLeft = this.venusAge - Math.round(newExp / .62);
      this.marsLifeLeft = this.marsAge - Math.round(newExp / 1.88);
      this.jupiterLifeLeft = this.jupiterAge - Math.round(newExp / 11.86);
    } else {
      this.earthLifeLeft = Math.round(this.earthAvgLife-this.age);
      this.mercuryLifeLeft = Math.round(this.mercuryExpectancy-this.mercuryAge);
      this.venusLifeLeft = Math.round(this.venusExpectancy-this.venusAge);
      this.marsLifeLeft = Math.round(this.marsExpectancy-this.marsAge);
      this.jupiterLifeLeft = Math.round(this.jupiterExpectancy-this.jupiterAge);
    }
  }
}

export class UserStrings {
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
  }
}