export class Human {
  constructor (age, birthGender) {
    this.age = age;
    this.birthGender = birthGender;
  }
  earthExpectancy() {
    if (this.birthGender === "female") {
      const avgLife = 82;
      return avgLife;
    }
  }
}

//a quick note on gender. Since I am unable to find life expectancy calculators that do not include genders past male and female I decided to make my gender "birth gender" for the sake of purposes to attempt to be more inclusive. If I could do a calculation that allowed for more options I would do so.