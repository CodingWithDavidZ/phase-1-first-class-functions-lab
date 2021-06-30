const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
//return first 2 drivers (Sally, Bob)
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

//return last 2 drivers (Freddy, Claudia)
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyFare) {
  return function (int) {
    return multiplyFare * int;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, choseOne) {
  return choseOne(drivers);
}
