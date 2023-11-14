function checkProbabilityTheory(count){
    min=100;
    max=1000;
    let pairCount = 0;
    let oddCount = 0;
    
    for(let i=0;i<count;i++){
        random_request=(Math.floor(Math.random() * (max - min + 1)) + min);
        
    if (random_request % 2 === 0) {
            pairCount++;
        } 
	else {
            oddCount++;
        }
       
    }
    let totalCount = pairCount + oddCount;
    pairPercentage =(pairCount / totalCount * 100).toFixed(2),
    oddPercentage = (oddCount / totalCount * 100).toFixed(2)
    
    console.log(pairPercentage, " : ", oddPercentage)
}



checkProbabilityTheory(20);
