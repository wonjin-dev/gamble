export const gamble = (probability: number): boolean => {
  const pbtArr: number[] = [];
  const randomNumberGenerator = () => Math.floor(Math.random() * 100);

  for (let i = 0; i < probability; i++) {
    const randomNumber = randomNumberGenerator();
    if (pbtArr.includes(randomNumber)) {
      i--;
    } else {
      pbtArr.push(randomNumber);
    }
  }

  const target = randomNumberGenerator();

  return pbtArr.includes(target);
};
