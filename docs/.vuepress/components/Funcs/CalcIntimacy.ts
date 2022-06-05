const DAILY = 1300
const leveMap = {
  1: 201,
  2: 300,
  3: 500,
  4: 700,
  5: 1000,
  6: 1500,
  7: 1600,
  8: 1700,
  9: 1900,
  10: 5500,
  11: 10000,
  12: 10000,
  13: 10000,
  14: 15000,
  15: 40000,
  16: 50000,
  17: 100000,
  18: 250000,
  19: 500000
}
function CalcIntimacy(Level: number, Exp: number, tLevel: number, tExp: number) {
  let allExp = -Exp
  for (let i = Level; i < tLevel; i++) {
    allExp += leveMap[i]
  }
  allExp += tExp
  return {
    total: allExp,
    days: Math.ceil(allExp / DAILY),
    DAILY: DAILY
  }
}

export default CalcIntimacy
