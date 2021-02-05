export class Human {
  constructor (age, birthGender) {
    this.age = age;
    this.birthGender = birthGender;
    this.earthAvgLife = 0
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
    
  }
}

//a quick note on gender. Since I am unable to find life expectancy calculators that do not include genders past male and female I decided to make my gender "birth gender" for the sake of purposes to attempt to be more inclusive. If I could do a calculation that allowed for more options I would do so.