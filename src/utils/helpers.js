export function calculateResultSet(
  startingAmount,
  monthlyContribution,
  rateOfReturn,
  inflationRate,
  numberOfYears
) {
  const rateOfReturnInBps = Math.round(rateOfReturn * 100);
  const monthlyRateOfReturnInBbs = Math.round(rateOfReturnInBps / 12);
  const inflationRateInBbs = Math.round(inflationRate * 100);
  let totalAccruedInterestInCents = 0;
  let capitalInCents = startingAmount * 100;
  let monthlyContributionInCents = monthlyContribution * 100;

  let resultSet = [];

  for (let i = 0; i < numberOfYears; i++) {
    for (let j = 0; j < 12; j++) {
      capitalInCents += monthlyContributionInCents;
      let interestInCents = (capitalInCents * monthlyRateOfReturnInBbs) / 10000;
      totalAccruedInterestInCents += interestInCents;
      let passiveIncomeInCents =
        (capitalInCents * (rateOfReturnInBps - inflationRateInBbs)) / 10000;

      resultSet.push({
        name: i * 12 + (j + 1),
        capital: (capitalInCents / 100).toFixed(2),
        interest: (interestInCents / 100).toFixed(2),
        totalAccruedInterest: (totalAccruedInterestInCents / 100).toFixed(2),
        passiveIncome: (passiveIncomeInCents / 100).toFixed(2),
      });

      capitalInCents += interestInCents;
    }
  }

  return resultSet;
}

export function formatNumberWithCommas(input) {
  if (input === undefined) {
    return;
  }
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
