const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier)
{
    const fareMultiplier = fare => fare*multiplier;
    
    return fareMultiplier;
}

const fareDoubler = function (fare) {
    const multiplier = 2;
    return createFareMultiplier(multiplier)(fare);
}

const fareTripler = function (fare) {
    const multiplier = 3;
    return createFareMultiplier(multiplier)(fare);
}

function selectDifferentDrivers (arrayOfDrivers, selection) {
    return selection(arrayOfDrivers);
}