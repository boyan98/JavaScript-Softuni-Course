function SchoolMaterials(Input){
    let countPen = 5.8 * Number(Input[0]);
    let countMarker = 7.2 * Number(Input[1]);
    let chemicalPerLiter = 1.2 * Number(Input[2]);
    let discountPercent = Number(Input[3])/100;
    
    let totalAmount = countPen + countMarker + chemicalPerLiter;
    let discountAmount = totalAmount * discountPercent;
    let total = totalAmount - discountAmount;
    console.log(total);
}

SchoolMaterials(["2", "3", "4", "25"]);
