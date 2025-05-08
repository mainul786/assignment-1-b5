{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    let newArr: { title: string; rating: number }[] = [];
    items.map((item) => {
      if (item.rating >= 4) {
        return newArr.push(item);
      }
    });
    return newArr;
  }

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const newArr: T[] = [];
    for (const array of arrays) {
      newArr.push(...array);
    }
    return newArr;
  }

  class vehicle {
    private make: string;
    year: number;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo() {
      console.log(` make : ${this.make},  year :${this.year}`);
    }
  }

  class Car extends vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel() {
      console.log(` ${this.model} and ${this.model}`);
    }
  }

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  interface Product {
    name: string;
    price: number;
  }
  function getMostExpensiveProduct(products: Product[]): Product | null {
    let expensiveProduct = products[0];
    if (products.length === 0) {
      return null;
    }
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > expensiveProduct.price) {
        expensiveProduct = products[i];
      }
    }
    return expensiveProduct;
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  function getDayType(day: Day): string {
    if (day === Day.Sunday || day === Day.Saturday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n > 0) {
          resolve(n * n);
        } else {
          reject("Negative number not allowed");
        }
      }, 1000);
    });
  }
}
