function timesTwo(n) {
  // Validation minimale : on refuse les entrées non numériques
  if (typeof n !== "number" || Number.isNaN(n)) {
    throw new Error("Input must be a number");
  }

  return n * 2;
}

module.exports = timesTwo;