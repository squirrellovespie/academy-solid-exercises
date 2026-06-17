// =============================================================
// Exercise 3 – Liskov Substitution Principle (LSP)
//
// YOUR TASK:
//   Square extends Rectangle and overrides setWidth/setHeight to
//   keep sides equal. This breaks printArea() which expects a
//   Rectangle to behave predictably (w=5, h=10 → area=50).
//
//   Redesign the hierarchy so both shapes can be used safely
//   without unexpected side effects.
//
// Run:  npm run exercise-3
// =============================================================
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  protected width: number = 0;
  protected height: number = 0;

  setWidth(w: number) {
    this.width = w;
  }

  setHeight(h: number) {
    this.height = h;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  protected width: number = 0;
  protected height: number = 0;
  
  setSide(s: number) {
    this.width = s;
    this.height = s;
  }

  area(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle();
rect.setWidth(5);
rect.setHeight(10);
console.log(rect.area()); // ✅ Expected area: 50, Got: 50

const square = new Square();
square.setSide(5); // ❌ Expected area: 25, Got: 100
console.log(square.area()); // ✅ Expected area: 25, Got: 25
