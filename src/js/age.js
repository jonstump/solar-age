export class Human {
  constructor (age, birthGender) {
    this.age = age;
    this.birthGender = birthGender;
  }
  earthExpectancy() {
    if (this.birthGender === "female" && this.age < 65) {
      const avgLife = 82;
      return avgLife;
    } else if (this.birthGender === "female" && this.age > 65) {
      const avgLife = 21;
      return avgLife;
    } else if (this.birthGender === "male" && this.age > 65) {
      const avgLife = 18;
      return avgLife;
    } else {
      const avgLife = 76;
      return avgLife;
    }
  }
  mercuryExpectancy() {
    const mercAvgLife = this.age * 4.32
    return mercAvgLife; 
  }
}

//a quick note on gender. Since I am unable to find life expectancy calculators that do not include genders past male and female I decided to make my gender "birth gender" for the sake of purposes to attempt to be more inclusive. If I could do a calculation that allowed for more options I would do so.