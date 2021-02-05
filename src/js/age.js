//Note to instructor: I started my project in a different order at the beginning of the day and realized I needed to pivot back to some simpler code. This might look a little wonky in my git commit history as it made me realize I needed to update my constructor in order to significantly dry up my code. Just wanted to leave this note here in case there was some confusing looking through my git history.

import { thisExpression } from "@babel/types";

export class Human {
  constructor (age, birthGender) {
    this.age = age;
    this.birthGender = birthGender;
    this.earthAvgLife = 0;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }
  insterstellarAge() {
    this.mercuryAge = Math.round(this.age/.24);
  }
  earthExpectancy() {
    if (this.birthGender === "female" && this.age < 65) {
      this.earthAvgLife = 82;
      return this.earthAvgLife;
    } else if (this.birthGender === "female" && this.age > 65) {
      this.earthAvgLife = 21;
      return this.earthAvgLife;
    } else if (this.birthGender === "male" && this.age > 65) {
      this.earthAvgLife = 18;
      return this.earthAvgLife;
    } else {
      this.earthAvgLife = 76;
      return this.earthAvgLife;
    }
  }
  mercuryExpectancy() {
    if (this.birthGender === "female" && this.age < 65) {
      const mercAvgLife = this.earthAvgLife * 4.32;
      //these need to be fixed to 4.16 (it's 2021 not 2020)
      return parseInt(mercAvgLife);
    } else if (this.birthGender === "female" && this.age > 65) {
      const mercAvgLife = this.earthAvgLife * 4.32;
      return parseInt(mercAvgLife);
    } else if (this.birthGender === "male" && this.age > 65) {
      const mercAvgLife = this.earthAvgLife * 4.32;
      return parseInt(mercAvgLife);
    } else {
      const mercAvgLife = this.earthAvgLife * 4.32;
      return parseInt(mercAvgLife);
    }
  }
  venusExpectancy() {
    const venusAvgLife = this.earthAvgLife * 1.628;
    return parseInt(venusAvgLife);
  }
  marsExpectancy() {
    const marsAvgLife = this.earthAvgLife * .532;
    return parseInt(marsAvgLife);
  }
}

//a quick note on gender. Since I am unable to find life expectancy calculators that do not include genders past male and female I decided to make my gender "birth gender" for the sake of purposes to attempt to be more inclusive. If I could do a calculation that allowed for more options I would do so.