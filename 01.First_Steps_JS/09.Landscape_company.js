function landscapingCompany(Input){
    let m2 =7.61* Number(Input[0]);
    let discount = 18/100;
    let discountPrice = m2*discount;
    let finalPrice = m2 - discountPrice;
    console.log('The final price is: '+ finalPrice + ' lv.');
    console.log('The discount is: '+ discountPrice + ' lv.');

}

landscapingCompany(["550"]);

//Console reads only m2(meters*meters) that will be greened(Ozelenqvani).
// M2 price for 1 meter is 7.61.
