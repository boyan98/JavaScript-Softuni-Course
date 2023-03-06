function projectCreation(input){
    let firstName = input[0];
    let projectsNmb = Number(input[1]);
    let time = projectsNmb * 3;
    console.log(`The architect ${firstName} will need ${time} hours to complete ${projectsNmb} project/s.`);
}

projectCreation(["Maria","9"]);
