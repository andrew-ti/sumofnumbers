function sumFor(numbers: number[]): number {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

function sumWhile(numbers: number[]): number {
  let sum = 0;
  let i = 0;

  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }

  return sum;
}

function sumRecursion(numbers: number[]): number {
  if (numbers.length === 1) {
    return numbers[0];
  } if (numbers.length === 0) {
    return 0;
  }

  return numbers[0] + sumRecursion(numbers.slice(1));
}

function sumTheFunctionalWay(numbers: number[]): number {
  return numbers.reduce((total, number) => total + number, 0);
}

const numbers = [1, 2, 3, 4, 5];

console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheFunctionalWay(numbers));
