type StringType = {
  input: string;
  toUpper?: boolean;
};

const formatString = (input: string, toUpper: boolean = true): string => {
  const updatedString = toUpper ? input.toUpperCase() : input.toLowerCase();
  console.log(updatedString);
  return updatedString;
};

// #################################################

type ItemType = { title: string; rating: number };

const filterByRating = (items: ItemType[]): ItemType[] => {
  const filteredItems = items.filter((item: ItemType) => item.rating >= 4);
  console.log(filteredItems);
  return filteredItems;
};

// #################################################
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const refinedArray = arrays.reduce(
    (result, array) => [...result, ...array],
    []
  );
  console.log(refinedArray);
  return refinedArray;
};

// #################################################
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

// #################################################
const processValue = (value: string | number): number => {
  const result = typeof value === "string" ? value.length : value * 2;
  console.log(result);
  return result;
};

// #################################################

interface Product {
  name: string;
  price: number;
}

const getMostExpensiveProduct = (products: Product[]): Product | null => {
  if (products.length === 0) return null;

  const filterProducts = products.sort((a, b) => b.price - a.price);

  const result = filterProducts[0];
  console.log(result);
  return result;
};

// #################################################
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
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

// #################################################
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
