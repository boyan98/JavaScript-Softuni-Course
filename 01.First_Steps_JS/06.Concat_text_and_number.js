function concatenateData(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];
    //console.log("You are " + firstName + ' '+ lastName + ", a " + age + '-years old person from ' + town + '.');   //concat can also be used but the better option is below(interpolation).
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)   //interpolation

}

concatenateData(["Maria","Ivanova","19","Pleven"]); //Input the relevant data for above code
