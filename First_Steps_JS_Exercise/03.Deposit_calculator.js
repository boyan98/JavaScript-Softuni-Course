function depositCalc(Input){
    let depositAmount = Number(Input[0]);
    let depositPeriod = Number(Input[1]);
    let annualInterestPercent = Number(Input[2]);
    
    // we should convert the 3rd input to %.
    let annualInterestDecimal = annualInterestPercent / 100;
    
    
    let amount = depositAmount + depositPeriod*((depositAmount*annualInterestDecimal)/12)
    console.log(amount);
    
}


depositCalc(["200","3","5.7"])

//depositPeriod in months(1-12).
