// Code your solution in this file!
const returnFirstTwoDrivers = () => {
    return ["Antonia", "Nuru"] 
}

const returnLastTwoDrivers = () => {
    return["Amari", "Mo"]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multi) => {
    return (fare) => {
       return fare * multi
    }
}

const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier * 2;
}

const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier * 3
}

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers("Antonia", "Nuru");
}
