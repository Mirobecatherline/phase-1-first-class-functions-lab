// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers=function (drivers) {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers=function (drivers) {
    return drivers.slice(2);
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(x){
    return function () {
        return x*5;
    }
} 
const fareDoubler=function (createFareMultiplier) {
    return 2*createFareMultiplier;
}
const fareTripler=function (createFareMultiplier) {
    return 3*createFareMultiplier;
}
function selectDifferentDrivers(drivers,returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers);
}
