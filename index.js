// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const driverNew = {...driver};
  driverNew[key] = value;
  return driverNew;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  driverClone = {...driver}
  delete driverClone[key]
  return driverClone
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
