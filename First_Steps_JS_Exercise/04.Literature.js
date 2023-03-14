function Literature(Input){
    let pageNumber = Number(Input[0]);
    let pagesPerHour = Number(Input[1]);
    let daysCount = Number(Input[2]);
    
    let totalHours = pageNumber / pagesPerHour;
    let dailyHours = totalHours / daysCount;
    console.log(dailyHours)
    
    
}

Literature(["212", "20", "2"])


// Find the dailyHours needed for person X to read a literature considering pageNumber, pagesPerHour, daysCount.
