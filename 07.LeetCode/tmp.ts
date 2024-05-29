const passThePillow = (n: number, time: number): number => {
  if (n > time) return time + 1;

  const cyclesCompleted = Math.floor(time / (n - 1));
  const jumpsLeft = time % (n - 1);

  // if no of cyclesCompleted are even we will go from start vice versa
  if (cyclesCompleted % 2 === 0) return 1 + jumpsLeft;
  else return n - jumpsLeft;
};

function maximumOddBinaryNumber(s: string): string {
  const count = { zeros: 0, ones: 0 };

  for (const bit of s) {
    if (bit === "0") count.zeros++;
    if (bit === "1") count.ones++;
  }

  const zeros = String(0).repeat(count.zeros);
  const onesAtEnd = String(1).repeat(count.ones ? 1 : 0);
  const onesAtStart = String(1).repeat(count.ones ? count.ones - 1 : 0);

  const result = `${onesAtStart}${zeros}${onesAtEnd}`;

  return result;
}
