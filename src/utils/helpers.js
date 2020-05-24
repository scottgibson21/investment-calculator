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
  let totalAccruedExpenseRatioFeesPlusOpportunityCostInCents = 0;
  let totalAccruedFinancialAdvisorFeesInCents = 0;
  let totalAccruedFinancialAdivsorFeesPlusOpportunityCostInCents = 0;

  let calculatePassiveIncomeInCents = (capitalInCents) => {
    return (capitalInCents * (rateOfReturnInBps - inflationRateInBbs)) / 10000;
  };

  //setup initial resultset
  let initialPassiveIncome = (
    calculatePassiveIncomeInCents(capitalInCents) / 100
  ).toFixed(2);
  let resultSet = generateBaseResultSet(capitalInCents, initialPassiveIncome);

  for (let i = 1; i <= numberOfYears; i++) {
    let yearlyContributions = monthlyContributionInCents * 12;
    capitalInCents += yearlyContributions;
    totalAccruedContributionsInCents += yearlyContributions;

    //calculate the yearly interest and subtract expense ratio and financial adivsor fees
    let yearlyInterest = (capitalInCents * rateOfReturnInBps) / 10000;

    //calculate yearly opportunity costs for expense ratio fees
    let yearlyExpenseRatioFees = (capitalInCents * expenseRatioInBps) / 10000;
    let yearlyExpenseRatioFeeOpportunityCost =
      (totalAccruedExpenseRatioFeesPlusOpportunityCostInCents *
        rateOfReturnInBps) /
      10000;

    //calculate yearly opportunity costs for advisor fees
    let yearlyFinancialAdvisorFees =
      (capitalInCents * financialAdvisorFeesInBps) / 10000;
    let yearlyFinancialAdivsorOpportunityCost =
      (totalAccruedFinancialAdivsorFeesPlusOpportunityCostInCents *
        rateOfReturnInBps) /
      10000;

    yearlyInterest =
      yearlyInterest - yearlyExpenseRatioFees - yearlyFinancialAdvisorFees;
    capitalInCents += yearlyInterest;

    //update accumulators
    totalAccruedInterestInCents += yearlyInterest;
    totalAccruedExpenseRatioFeesInCents += yearlyExpenseRatioFees;
    totalAccruedFinancialAdvisorFeesInCents += yearlyFinancialAdvisorFees;
    totalAccruedExpenseRatioFeesPlusOpportunityCostInCents +=
      yearlyExpenseRatioFees + yearlyExpenseRatioFeeOpportunityCost;
    totalAccruedFinancialAdivsorFeesPlusOpportunityCostInCents +=
      yearlyFinancialAdvisorFees + yearlyFinancialAdivsorOpportunityCost;

    //Total Capital
    resultSet.capital[0].data.push({
      x: i,
      y: (capitalInCents / 100).toFixed(2),
    });

    //Total Contributions
    resultSet.totalContributions[0].data.push({
      x: i,
      y: (totalAccruedContributionsInCents / 100).toFixed(2),
    });

    //Yearly Interest
    resultSet.interest[0].data.push({
      x: i,
      y: (yearlyInterest / 100).toFixed(2),
    });

    //Total Interest
    resultSet.totalInterest[0].data.push({
      x: i,
      y: (totalAccruedInterestInCents / 100).toFixed(2),
    });

    //Yearly Expense Ratio Fees
    resultSet.expenseRatioFees[0].data.push({
      x: i,
      y: (yearlyExpenseRatioFees / 100).toFixed(2),
    });

    //Total Expense Ratio Fees
    resultSet.totalExpenseRatioFees[0].data.push({
      x: i,
      y: (totalAccruedExpenseRatioFeesInCents / 100).toFixed(2),
    });

    //Total Expense Ratio Opportunity Costs
    resultSet.totalExpenseRatioOpportunityCost[0].data.push({
      x: i,
      y: (totalAccruedExpenseRatioFeesPlusOpportunityCostInCents / 100).toFixed(
        2
      ),
    });

    //Yearly Adivsor Fees
    resultSet.adivsorFees[0].data.push({
      x: i,
      y: (yearlyFinancialAdvisorFees / 100).toFixed(2),
    });

    //Total Adivsor Fees
    resultSet.totalAdvisorFees[0].data.push({
      x: i,
      y: (totalAccruedFinancialAdvisorFeesInCents / 100).toFixed(2),
    });

    //Total Adivsor Fees Opportunity Cost
    resultSet.totalAdvisorOpportunityCost[0].data.push({
      x: i,
      y: (
        totalAccruedFinancialAdivsorFeesPlusOpportunityCostInCents / 100
      ).toFixed(2),
    });

    //Passive Income
    resultSet.passiveIncome[0].data.push({
      x: i,
      y: (calculatePassiveIncomeInCents(capitalInCents) / 100).toFixed(2),
    });
  }

  return resultSet;
}

function generateBaseResultSet(capitalInCents, initialPassiveIncome) {
  return {
    capital: [
      {
        id: "totalCapital",
        data: [
          {
            x: 0,
            y: (capitalInCents / 100).toFixed(2),
          },
        ],
      },
    ],
    totalContributions: [
      {
        id: "totalContributions",
        data: [
          {
            x: 0,
            y: 0,
          },
        ],
      },
    ],
    interest: [
      {
        id: "interest",
        data: [
          {
            x: 0,
            y: 0,
          },
        ],
      },
    ],
    totalInterest: [
      {
        id: "totalInterest",
        data: [
          {
            x: 0,
            y: 0,
          },
        ],
      },
    ],
    expenseRatioFees: [
      {
        id: "expenseRatioFees",
        data: [
          {
            x: 0,
            y: 0,
          },
        ],
      },
    ],
    totalExpenseRatioFees: [
      {
        id: "totalExpenseRatioFees",
        data: [
          {
            x: 0,
            y: 0,
          },
        ],
      },
    ],
    totalExpenseRatioOpportunityCost: [
      {
        id: "totalExpenseRatioTrueCost",
        data: [
          {
            x: 0,
            y: 0,
          },
        ],
      },
    ],
    adivsorFees: [
      {
        id: "advisorFees",
        data: [
          {
            x: 0,
            y: 0,
          },
        ],
      },
    ],
    totalAdvisorFees: [
      {
        id: "totalAdvisorFees",
        data: [
          {
            x: 0,
            y: 0,
          },
        ],
      },
    ],
    totalAdvisorOpportunityCost: [
      {
        id: "totalAdvisorTrueCost",
        data: [
          {
            x: 0,
            y: 0,
          },
        ],
      },
    ],
    passiveIncome: [
      {
        id: "passiveIncome",
        data: [
          {
            x: 0,
            y: initialPassiveIncome,
          },
        ],
      },
    ],
  };
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
