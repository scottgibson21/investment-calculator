export function calculateResultSet(
  startingAmount,
  monthlyContribution,
  rateOfReturn,
  expenseRatio,
  financialAdvisorFees,
  inflationRate,
  numberOfYears
) {
  //convert all percentages to basis points (bps)
  const rateOfReturnInBps = Math.round(rateOfReturn * 100);
  const expenseRatioInBps = Math.round(expenseRatio * 100);
  const financialAdvisorFeesInBps = Math.round(financialAdvisorFees * 100);
  const inflationRateInBbs = Math.round(inflationRate * 100);

  //convert starting values to cents and initialize accumulators
  let capitalInCents = startingAmount * 100;
  let monthlyContributionInCents = monthlyContribution * 100;
  let totalAccruedContributionsInCents = 0;
  let totalAccruedInterestInCents = 0;
  let totalAccruedExpenseRatioFeesInCents = 0;
  let totalAccruedFinancialAdvisorFeesInCents = 0;

  let calculatePassiveIncomeInCents = (capitalInCents) => {
    return (capitalInCents * (rateOfReturnInBps - inflationRateInBbs)) / 10000;
  };

  let resultSet = [];

  resultSet.push({
    name: 0,
    capital: (capitalInCents / 100).toFixed(2),
    totalContributions: 0,
    interest: 0,
    totalAccruedInterest: 0,
    expenseRatioFees: 0,
    totalAccruedExpenseRatioFees: 0,
    financialAdvisorFees: 0,
    totalAccruedFinancialAdvisorFees: 0,
    passiveIncome: (
      calculatePassiveIncomeInCents(capitalInCents) / 100
    ).toFixed(2),
  });

  for (let i = 1; i <= numberOfYears; i++) {
    let yearlyContributions = monthlyContributionInCents * 12;
    capitalInCents += yearlyContributions;
    totalAccruedContributionsInCents += yearlyContributions;

    //calculate the yearly interest and subtract expense ratio and financial adivsor fees
    let yearlyInterest = (capitalInCents * rateOfReturnInBps) / 10000;
    let yearlyExpenseRatioFees = (capitalInCents * expenseRatioInBps) / 10000;
    let yearlyFinancialAdvisorFees =
      (capitalInCents * financialAdvisorFeesInBps) / 10000;
    yearlyInterest =
      yearlyInterest - yearlyExpenseRatioFees - yearlyFinancialAdvisorFees;
    capitalInCents += yearlyInterest;

    //update accumulators
    totalAccruedInterestInCents += yearlyInterest;
    totalAccruedExpenseRatioFeesInCents += yearlyExpenseRatioFees;
    totalAccruedFinancialAdvisorFeesInCents += yearlyFinancialAdvisorFees;

    //push data for the year onto the result set
    resultSet.push({
      name: i,
      capital: (capitalInCents / 100).toFixed(2),
      totalContributions: (totalAccruedContributionsInCents / 100).toFixed(2),
      interest: (yearlyInterest / 100).toFixed(2),
      totalAccruedInterest: (totalAccruedInterestInCents / 100).toFixed(2),
      expenseRatioFees: (yearlyExpenseRatioFees / 100).toFixed(2),
      totalAccruedExpenseRatioFees: (
        totalAccruedExpenseRatioFeesInCents / 100
      ).toFixed(2),
      financialAdvisorFees: (yearlyFinancialAdvisorFees / 100).toFixed(2),
      totalAccruedFinancialAdvisorFees: (
        totalAccruedFinancialAdvisorFeesInCents / 100
      ).toFixed(2),
      passiveIncome: (
        calculatePassiveIncomeInCents(capitalInCents) / 100
      ).toFixed(2),
    });
  }

  return resultSet;
}

export function formatNumberWithCommas(input) {
  if (input === undefined) {
    return;
  }
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const chartData = {
  capital: {
    xAxis: "name",
    displayName: "Capital",
    color: "#8884d8",
  },
  totalAccruedInterest: {
    xAxis: "name",
    displayName: "Total Accrued Interest",
    color: "#8884d8",
  },
  interest: {
    xAxis: "name",
    displayName: "Interest",
    color: "#8884d8",
  },
  totalContributions: {
    xAxis: "name",
    displayName: "Total Contributions",
    color: "#8884d8",
  },
  passiveIncome: {
    xAxis: "name",
    displayName: "Passive Income",
    color: "#8884d8",
  },
  totalAccruedExpenseRatioFees: {
    xAxis: "name",
    displayName: "Total Expense Ratio Fees",
    color: "#8884d8",
  },
  totalAccruedFinancialAdvisorFees: {
    xAxis: "name",
    displayName: "Total Financial Adivsor Fees",
    color: "#8884d8",
  },
};
