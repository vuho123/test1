//Bai 1 in problem solving
function findOppositeNumber(n,inputNumber){
    
    if (4<n<20 && n%2==0 && 0<=inputNumber<=n-1 && inputNumber>(n/2)){
        return(inputNumber-n/2);
    

    }
    else if(4<n<20 && n%2==0 && 0<=inputNumber<=n-1 && inputNumber<(n/2)){
        return(n/2+inputNumber)
    }
}
console.log(findOppositeNumber(10,6))
console.log(findOppositeNumber(10,2))

