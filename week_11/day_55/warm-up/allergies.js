const _ = require('lodash');

class Allergies {
  constructor(num) {
    this.allergyValue = num;
    this.allergyList = [];
  }

  listOfAllergies() {
    return {
      eggs: 1,
      peanuts: 2,
      shellfish: 4,
      strawberries: 8,
      tomatoes: 16,
      chocolate: 32,
      pollen: 64,
      cats: 128
    }
  }

  allergicTo(thing) {
    const allergyValue = this.allergyValue;
    this.calculate(allergyValue);
    if (this.allergyList.indexOf(thing) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  list() {
    const allergyValue = this.allergyValue;
    this.calculate(allergyValue);
    return this.allergyList;
  }

  calculate(allergyValue) {
    const valueArr = _.sortBy(Object.values(this.listOfAllergies()), num => {
        return num;
    });
    // console.log(valueArr);
    for (let i = 0; i < valueArr.length; i++) {
      if (allergyValue < valueArr[i]) {
        const targetValue = valueArr[i-1];
        this.allergyList.push((_.invert(this.listOfAllergies()))[targetValue]);
        const remain = allergyValue - targetValue;
        if (remain > 0) {
          this.calculate(remain);
        }
        break;
      }
    }
  }
}

const allergies = new Allergies(34);
// allergies.calculate();
console.log(allergies.list());
console.log(allergies.allergicTo('peanuts'));
