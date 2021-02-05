//Note to instructor: I started my project in a different order at the beginning of the day and realized I needed to pivot back to some simpler code. This might look a little wonky in my git commit history as it made me realize I needed to update my constructor in order to significantly dry up my code. Just wanted to leave this note here in case there was some confusing looking through my git history.

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
    const negLifeCheck = this.earthAvgLife-this.age
      if (negLifeCheck < 0) {
        this.mercuryLifeLeft = Math.round(this.mercuryAge-this.mercuryExpectancy)
        this.venusLifeLeft = Math.round(this.venusAge-this.venusExpectancy)
        this.marsLifeLeft = Math.round(this.marsAge-this.marsExpectancy)
        this.jupiterLifeLeft = Math.round(this.jupiterAge-this.jupiterExpectancy)
        return true;
      } else {
        this.earthLifeLeft = Math.round(this.earthAvgLife-this.age)
        this.mercuryLifeLeft = Math.round(this.mercuryExpectancy-this.mercuryAge)
        this.venusLifeLeft = Math.round(this.venusExpectancy-this.venusAge)
        this.marsLifeLeft = Math.round(this.marsExpectancy-this.marsAge)
        this.jupiterLifeLeft = Math.round(this.jupiterExpectancy-this.jupiterAge)
      }
    
  }
}

//a quick note on gender. Since I am unable to find life expectancy calculators that do not include genders past male and female I decided to make my gender "birth gender" for the sake of purposes to attempt to be more inclusive. If I could do a calculation that allowed for more options I would do so.