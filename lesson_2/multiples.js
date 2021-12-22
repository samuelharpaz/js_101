function sumOfMultiples(target, factors = []) {
  if (!factors.length) {
    factors = [3, 5];
  }

  const multiples = [];

  factors.forEach(f => {
    for (let currMult = f; currMult < target; currMult += f) {
      multiples.push(currMult);
    }
  });

  const multiplesUnique = [...new Set(multiples)];

  return multiplesUnique.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfMultiples(20, [3, 7]));
