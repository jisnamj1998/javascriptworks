loanAmount=10000
tenureInYears=2
rateOfInterestYearly=3
rateOfInterestMonthly=rateOfInterestYearly/(100*12)
tenureInMonth=tenureInYears*12
monthlyEmi=(loanAmount*rateOfInterestMonthly*(1+rateOfInterestMonthly)**tenureInMonth)/((1+rateOfInterestMonthly)**tenureInMonth-1)
console.log(monthlyEmi);
totalInterestPayable=loanAmount*rateOfInterestYearly*tenureInYears/100
console.log(totalInterestPayable);
totalPayment=loanAmount+totalInterestPayable
console.log(totalPayment);


