function petshop(Input){
    let dogfood = 2.5* Number(Input[0]);
    let catfood = 4* Number(Input[1]);
    
    let result = dogfood + catfood;
    console.log(result + " lv.");

}

petshop(["5","4"]);

// The result amount outputs the 2 inputs which are multiplied with the relevant amounts for kilogram of food.
