// Code your solution in this file!
function distanceFromHqInBlocks(customer){
    const hqDistance = 42
    let blocks = Math.abs(hqDistance - customer)
    console.log(`distance in blocks ${blocks}`)
 return blocks
}

function distanceFromHqInFeet(customer){
 const blocks = distanceFromHqInBlocks(customer)
return blocks * 264
}

function distanceTravelledInFeet(a , b) {
const distance =  (a-b)
return Math.abs(distance) * 264
}

function calculatesFarePrice(start, destination){
    let distance = Math.abs(start-destination) 
    //2, 8, 10
    let distanceInFeet = distance * 264 
    // 528, 2112, 2640

    if(distance <= 1){
        return 0
    }

    if (distanceInFeet >= 400 && distanceInFeet <= 2000){
        return (distanceInFeet - 400) * 0.02 
        // 128 * 0.02 = 2.56 cents
    }

    if(distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25
    }

    if(distanceInFeet > 2500){
        return 'cannot travel that far'
    }

}






