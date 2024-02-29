const passThePillow = (n: number, time: number): number => {
  if (n > time) return time + 1;

  const cyclesCompleted = Math.floor(time / (n - 1));
  const jumpsLeft = time % (n - 1);

  // if no of cyclesCompleted are even we will go from start vice versa
  if (cyclesCompleted % 2 === 0) return 1 + jumpsLeft;
  else return n - jumpsLeft;
};
