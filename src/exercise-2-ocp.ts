// =============================================================
// Exercise 2 – Open/Closed Principle (OCP)
//
// YOUR TASK:
//   DiscountCalculator uses if/else chains that grow every time
//   a new customer type is added — requiring edits to existing code.
//
//   Refactor it so adding a new discount type (e.g. "pensioner"
//   at 40% off) requires NO changes to existing classes.
//
// Run:  npm run exercise-2
// =============================================================

// ---- PROBLEM CODE (do not delete — understand it first) -----

interface DiscountCalculator {
  calculate(price: number): void;
}

class NoDiscountCalculator implements DiscountCalculator {
  calculate(price: number): number {
    return price; // no discount by default
  }
}

class StudentDiscountCalculator implements DiscountCalculator {
  calculate(price: number): number {
    return price * 0.8; // 20% off
  }
}

class EmployeeDiscountCalculator implements DiscountCalculator {
  calculate(price: number): number {
    return price * 0.7; // 30% off
  }
}

class VipDiscountCalculator implements DiscountCalculator {
  calculate(price: number): number {
    return price * 0.5; // 50% off
  }
}

class FinalPrice {
  constructor(private discountCalculator: DiscountCalculator) {}

  calculate(price: number) {
    return this.discountCalculator.calculate(price);
  }
}

const studentPrice = new FinalPrice(new StudentDiscountCalculator());
const vipPrice = new FinalPrice(new VipDiscountCalculator());
const standardPrice = new FinalPrice(new NoDiscountCalculator());
console.log("Student price:  ", studentPrice.calculate(100)); // 80
console.log("VIP price:      ", vipPrice.calculate(100)); // 50
console.log("Standard price: ", standardPrice.calculate(100)); // 100
