export function calculateResultSet(
  startingAmount,
  monthlyContribution,
  rateOfReturn,
  inflationRate,
  numberOfYears
) {
  const monthlyRateOfReturn = rateOfReturn / 12;
  console.log("monthly rate of return", monthlyRateOfReturn);
  let totalAccruedInterest = 0;
  let capital = startingAmount;
  let resultSet = [];

  for (let i = 0; i < numberOfYears; i++) {
    for (let j = 0; j < 12; j++) {
      capital += monthlyContribution;
      let interest = (capital * monthlyRateOfReturn).toFixed(2);
      totalAccruedInterest += interest;
      let passiveIncome = (capital * (rateOfReturn - inflationRate)).toFixed(2);

      resultSet.push({
        month: i * 12 + (j + 1),
        capital: capital / 100,
        interest: interest / 100,
        totalAccruedInterest: totalAccruedInterest / 100,
        passiveIncome: passiveIncome / 100,
      });

      capital += interest / 100;
    }
  }

  return resultSet;
}
