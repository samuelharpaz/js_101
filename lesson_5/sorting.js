let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a, b) => {
  const aTotal = a.reduce((sum, currScore) => sum + currScore, 0);
  const bTotal = b.reduce((sum, currScore) => sum + currScore, 0);

  return aTotal - bTotal;
});

console.log(scores);