function createEmployeeRecord(array) {
    function recordCreate(array) {
    this.firstName = array[0],
    this.familyName = array[1],
    this.title = array[2],
    this.payPerHour = array[3]
    this.timeInEvents = [],
    this.timeOutEvents = []}
    let employeeRecord = new recordCreate(array);
    return employeeRecord
};

function createEmployeeRecords(arrOfarr) {
   return arrOfarr.map(x => createEmployeeRecord(x))
}



function createTimeInEvent(timeIn) {
this.timeInEvents.push({type: "TimeIn",
hour: parseInt(timeIn.substring(10), 10),
date: timeIn.substring(0, 10)})
return this}

function createTimeOutEvent(timeOut) {
this.timeOutEvents.push({type: "TimeOut",
hour: parseInt(timeOut.substring(10), 10),
date: timeOut.substring(0, 10)})
return this
}

function hoursWorkedOnDate(ymd){
    let timeIn = this.timeInEvents.find(x => x.date === ymd)
    let timeOut = this.timeOutEvents.find(x => x.date === ymd)
    let hrsWkd = (timeOut.hour - timeIn.hour)/100
    return hrsWkd
}



function wagesEarnedOnDate(ymd) {
    let hoursWorked = hoursWorkedOnDate.call(this, ymd)
    * this.payPerHour

  return hoursWorked
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}

function findEmployeeByFirstName (srcArray, fn) {
  let foundEmployee = srcArray.find(x => x.firstName === fn);
  return foundEmployee
}

function calculatePayroll(arr) {
    console.log(arr)
  let wages = arr.map(function(x) {return allWagesFor.call(x)})
console.log(wages)
return wages.reduce((x, y) => x +y)}