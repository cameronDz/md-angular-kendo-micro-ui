// https://stackoverflow.com/questions/18230217
const randomNumberGenerator = (min = 0, max = 3) => {
  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  const randomNumber = randomBuffer[0] / (0xffffffff + 1);
  return Math.floor(randomNumber * (max - min + 1)) + min;
};

export { randomNumberGenerator };
